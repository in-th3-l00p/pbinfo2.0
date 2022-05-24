#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include <QListWidget>
#include <vector>
#include <utility>

QT_BEGIN_NAMESPACE
namespace Ui { class MainWindow; }
QT_END_NAMESPACE

namespace Types {
    using uchar = unsigned char;
}

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

    void on_testsList_itemDoubleClicked(QListWidgetItem *item);

    void on_addButton_clicked();

private:
    Ui::MainWindow *ui;
    std::vector<std::pair<QString, QString>> tests;
};
#endif // MAINWINDOW_H
