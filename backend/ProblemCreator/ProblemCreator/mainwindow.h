#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>

QT_BEGIN_NAMESPACE
namespace Ui { class MainWindow; }
QT_END_NAMESPACE

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    MainWindow(QWidget *parent = nullptr);
    ~MainWindow();

private slots:
    void on_cancelButton_clicked();
    void on_browseButton_clicked();
    void on_addTestButton_clicked();
    void on_removeTestButton_clicked();

private:
    Ui::MainWindow *ui;
};
#endif // MAINWINDOW_H
