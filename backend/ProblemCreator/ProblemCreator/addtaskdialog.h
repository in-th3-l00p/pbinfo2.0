#ifndef ADDTASKDIALOG_H
#define ADDTASKDIALOG_H

#include <QDialog>

class AddTaskDialog: public QDialog
{
    Q_OBJECT

public:
    AddTaskDialog(QWidget* parent = nullptr);
    ~AddTaskDialog();
private:
};

#endif // ADDTASKDIALOG_H
