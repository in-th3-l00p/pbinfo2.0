#ifndef ADDTESTDIALOG_H
#define ADDTESTDIALOG_H

#include <QDialog>

QT_BEGIN_NAMESPACE
namespace Ui { class TestDialog; }
QT_END_NAMESPACE

class TestDialog: public QDialog
{
    Q_OBJECT

public:
    TestDialog(QWidget* parent = nullptr);
    ~TestDialog();

    QString input, output;
    void setInput(QString& input);
    void setOutput(QString& output);

private slots:
    void on_inputBrowseButton_clicked();
    void on_outputBrowseButton_clicked();
    void on_buttonBox_accepted();

private:
    Ui::TestDialog* ui;
};

#endif // ADDTESTDIALOG_H
