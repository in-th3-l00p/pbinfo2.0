#include "mainwindow.h"
#include "./ui_mainwindow.h"
#include <QMessageBox>
#include <QFileDialog>
#include "addtaskdialog.h"

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
        this->ui->pathLineEdit->setText(path);
}

void MainWindow::on_addTestButton_clicked() {
    AddTaskDialog dialog;
    dialog.exec();
}

void MainWindow::on_removeTestButton_clicked() {

}
