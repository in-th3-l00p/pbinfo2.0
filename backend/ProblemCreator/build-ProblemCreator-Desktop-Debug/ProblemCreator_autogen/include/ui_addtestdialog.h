/********************************************************************************
** Form generated from reading UI file 'addtestdialog.ui'
**
** Created by: Qt User Interface Compiler version 5.15.3
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_ADDTESTDIALOG_H
#define UI_ADDTESTDIALOG_H

#include <QtCore/QVariant>
#include <QtWidgets/QApplication>
#include <QtWidgets/QDialog>
#include <QtWidgets/QDialogButtonBox>
#include <QtWidgets/QFormLayout>
#include <QtWidgets/QHBoxLayout>
#include <QtWidgets/QLabel>
#include <QtWidgets/QLineEdit>
#include <QtWidgets/QPushButton>

QT_BEGIN_NAMESPACE

class Ui_AddTestDialog
{
public:
    QFormLayout *formLayout;
    QLabel *inputLabel;
    QHBoxLayout *inputLayout;
    QLineEdit *inputLineEdit;
    QPushButton *inputBrowseButton;
    QLabel *outputLabel;
    QHBoxLayout *outputLayout;
    QLineEdit *outputLineEdit;
    QPushButton *outputBrowseButton;
    QDialogButtonBox *buttonBox;

    void setupUi(QDialog *AddTestDialog)
    {
        if (AddTestDialog->objectName().isEmpty())
            AddTestDialog->setObjectName(QString::fromUtf8("AddTestDialog"));
        AddTestDialog->resize(466, 109);
        formLayout = new QFormLayout(AddTestDialog);
        formLayout->setObjectName(QString::fromUtf8("formLayout"));
        inputLabel = new QLabel(AddTestDialog);
        inputLabel->setObjectName(QString::fromUtf8("inputLabel"));

        formLayout->setWidget(0, QFormLayout::LabelRole, inputLabel);

        inputLayout = new QHBoxLayout();
        inputLayout->setObjectName(QString::fromUtf8("inputLayout"));
        inputLayout->setSizeConstraint(QLayout::SetMaximumSize);
        inputLineEdit = new QLineEdit(AddTestDialog);
        inputLineEdit->setObjectName(QString::fromUtf8("inputLineEdit"));

        inputLayout->addWidget(inputLineEdit);

        inputBrowseButton = new QPushButton(AddTestDialog);
        inputBrowseButton->setObjectName(QString::fromUtf8("inputBrowseButton"));

        inputLayout->addWidget(inputBrowseButton);


        formLayout->setLayout(0, QFormLayout::FieldRole, inputLayout);

        outputLabel = new QLabel(AddTestDialog);
        outputLabel->setObjectName(QString::fromUtf8("outputLabel"));

        formLayout->setWidget(1, QFormLayout::LabelRole, outputLabel);

        outputLayout = new QHBoxLayout();
        outputLayout->setObjectName(QString::fromUtf8("outputLayout"));
        outputLayout->setSizeConstraint(QLayout::SetMaximumSize);
        outputLineEdit = new QLineEdit(AddTestDialog);
        outputLineEdit->setObjectName(QString::fromUtf8("outputLineEdit"));

        outputLayout->addWidget(outputLineEdit);

        outputBrowseButton = new QPushButton(AddTestDialog);
        outputBrowseButton->setObjectName(QString::fromUtf8("outputBrowseButton"));

        outputLayout->addWidget(outputBrowseButton);


        formLayout->setLayout(1, QFormLayout::FieldRole, outputLayout);

        buttonBox = new QDialogButtonBox(AddTestDialog);
        buttonBox->setObjectName(QString::fromUtf8("buttonBox"));
        buttonBox->setOrientation(Qt::Horizontal);
        buttonBox->setStandardButtons(QDialogButtonBox::Cancel|QDialogButtonBox::Ok);

        formLayout->setWidget(2, QFormLayout::SpanningRole, buttonBox);


        retranslateUi(AddTestDialog);
        QObject::connect(buttonBox, SIGNAL(accepted()), AddTestDialog, SLOT(accept()));
        QObject::connect(buttonBox, SIGNAL(rejected()), AddTestDialog, SLOT(reject()));

        QMetaObject::connectSlotsByName(AddTestDialog);
    } // setupUi

    void retranslateUi(QDialog *AddTestDialog)
    {
        AddTestDialog->setWindowTitle(QCoreApplication::translate("AddTestDialog", "Adauga test", nullptr));
        inputLabel->setText(QCoreApplication::translate("AddTestDialog", "Input:", nullptr));
        inputBrowseButton->setText(QCoreApplication::translate("AddTestDialog", "Navigheaza", nullptr));
        outputLabel->setText(QCoreApplication::translate("AddTestDialog", "Output:", nullptr));
        outputBrowseButton->setText(QCoreApplication::translate("AddTestDialog", "Navigheaza", nullptr));
    } // retranslateUi

};

namespace Ui {
    class AddTestDialog: public Ui_AddTestDialog {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_ADDTESTDIALOG_H
