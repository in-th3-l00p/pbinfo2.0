#include "testdialog.h"
#include "./ui_testdialog.h"
#include <QFileDialog>

TestDialog::TestDialog(QWidget* parent)
    : QDialog(parent)
    , ui(new Ui::TestDialog)
{
    ui->setupUi(this);
}

TestDialog::~TestDialog() {
    delete ui;
}

void TestDialog::setInput(QString& input) {
    this->input = input;
    ui->inputLineEdit->setText(this->input);
}

void TestDialog::setOutput(QString& output) {
    this->output = output;
    ui->outputLineEdit->setText(this->output);
}

void TestDialog::on_inputBrowseButton_clicked() {
    QString path = QFileDialog::getOpenFileName(this, tr("Alege fisierul .in"), "", tr("Input (*.in)"));
    if (path.length())
        ui->inputLineEdit->setText(path);
}

void TestDialog::on_outputBrowseButton_clicked() {
    QString path = QFileDialog::getOpenFileName(this, tr("Alege fisierul .out"), "", tr("Output (*.out)"));
    if (path.length())
        ui->outputLineEdit->setText(path);
}


void TestDialog::on_buttonBox_accepted()
{
    input = ui->inputLineEdit->text();
    output = ui->outputLineEdit->text();
}
