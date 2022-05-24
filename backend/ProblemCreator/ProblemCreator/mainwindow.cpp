#include "mainwindow.h"
#include "testdialog.h"
#include "./ui_mainwindow.h"
#include <openssl/sha.h>
#include <QMessageBox>
#include <QFileDialog>
#include <QByteArray>
#include <QFile>
#include <QTextStream>

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);
}

MainWindow::~MainWindow() {
    delete ui;
}

void MainWindow::on_cancelButton_clicked() {
    QMessageBox::StandardButton confirmation = QMessageBox::question(
                this,
                tr("Confirmare"),
                tr("Esti sigur ca vrei sa inchizi fereastra?"),
                QMessageBox::Yes | QMessageBox::No
    );

    if (confirmation == QMessageBox::Yes)
        exit(0);
}


void MainWindow::on_browseButton_clicked() {
    QString path = QFileDialog::getExistingDirectory(this, "Directorul problemelor");
    if (path.length())
        ui->pathLineEdit->setText(path);
}

void MainWindow::on_addTestButton_clicked() {
    TestDialog dialog;
    dialog.exec();
    if (
            dialog.result() == QDialog::Rejected ||
            !dialog.input.length() ||
            !dialog.output.length()
    )
        return;

    ui->testsList->addItem(QString::number(tests.size() + 1));
    tests.push_back({dialog.input, dialog.output});
}

void MainWindow::on_testsList_itemDoubleClicked(QListWidgetItem *item) {
    int index = item->text().toInt() - 1;
    TestDialog dialog;
    dialog.setInput(tests[index].first);
    dialog.setOutput(tests[index].second);
    dialog.exec();
    if (
            dialog.result() == QDialog::Rejected ||
            !dialog.input.length() ||
            !dialog.output.length()
    )
        return;

    //update
    tests[index].first = dialog.input;
    tests[index].second = dialog.output;
}

static uchar* toCString(QString str) {
    unsigned char* cstr = new unsigned char[str.length()];
    for (int i = 0; i < str.length(); i++)
        cstr[i] = str[i].toLatin1();
    return cstr;
}

void MainWindow::on_addButton_clicked() {
    //verifying if the input is valid
    QString statement = ui->statementTextEdit->toPlainText();
    if (
            !ui->titleLineEdit->text().length() ||
            !ui->descriptionLineEdit->text().length() ||
            !statement.length() || !ui->testsList->count() ||
            !ui->pathLineEdit->text().length()
    ) {
        QMessageBox::information(
            this, tr("Informatii invalide"), tr("Informatiile date despre problema sunt invalide")
        );
        return;
    }

    //hashing the title
    uchar* ctitle = toCString(ui->titleLineEdit->text());
    uchar* hash = SHA1(ctitle, ui->titleLineEdit->text().length(), nullptr);

    //getting the directory name
    QString dirName = "";
    for (int i = 0; i < SHA_DIGEST_LENGTH; i++) {
        //dec to hex
        unsigned int dec = hash[i];
        QString hex = "";
        while (dec) {
            int r = dec % 16;
            if (r < 10)
                hex += r + '0';
            else
                hex += r - 10 + 'a';

            dec /= 16;
        }

        //filling empty spaces
        while (hex.length() < 2)
            hex.push_back('0');

        //copying
        for (int j = hex.length() - 1; j >= 0; j--)
            dirName.push_back(hex[j]);
    }

    //creating the directory
    QDir saveDir(ui->pathLineEdit->text());
    if (!saveDir.mkdir(dirName)) {
        QMessageBox::information(
            this, tr("Locatie de salvare"), tr("Locatie de salvare invalida")
        );
        return;
    }

    /*
     * converting the statement content such that it is json valid
     * changing every '\n' into two characters ('\' and 'n')
    */
    int insertions = 0;
    for (int i = 0; i < statement.length(); i++)
        if (statement[i] == '\n')
            insertions++;
    int oldSize = statement.length();
    while (statement.length() < oldSize + insertions)
        statement.push_back(" ");

    //the insertion
    for (int i = oldSize - 1; i >= 0; i--)
        if (statement[i] == '\n') {
            statement[i + insertions] = 'n';
            insertions--;
            statement[i + insertions] = '\\';
        } else
            statement[i + insertions] = statement[i];

    QString dirPath = ui->pathLineEdit->text() + "/" + dirName;

    //writing the problem information
    QFile json(dirPath + "/problem.json");
    if (!json.open(QIODevice::WriteOnly | QIODevice::Text)) {
        QMessageBox::information(
            this, tr("Eroare"), tr("Operatia de salvare esuata")
        );
        return;
    }
    QTextStream jsonStream(&json);
    jsonStream << "{\n";
    jsonStream << "    \"title\": \"" << ui->titleLineEdit->text() << "\",\n";
    jsonStream << "    \"description\": \"" << ui->descriptionLineEdit->text() << "\",\n";
    jsonStream << "    \"statement\": \"" << statement << "\",\n";
    jsonStream << "    \"tests\":\"" << QString::number(tests.size()) << "\"\n";
    jsonStream << "}\n";
    json.close();

    //copying the tests
    QDir testsDir(dirPath);
    if (!testsDir.mkdir("tests")) {
        QMessageBox::information(
            this, tr("Eroare"), tr("Operatia de salvare esuata")
        );
        return;
    }

    for (auto &test: tests) {
        QFile::copy(test.first, dirPath + "/tests");
        QFile::copy(test.second, dirPath + "/tests");
    }

    delete[] ctitle; //bye bye memory leaksss
}














