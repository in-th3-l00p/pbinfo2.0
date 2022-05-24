/********************************************************************************
** Form generated from reading UI file 'testdialog.ui'
**
** Created by: Qt User Interface Compiler version 5.15.3
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_TESTDIALOG_H
#define UI_TESTDIALOG_H

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

class Ui_TestDialog
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

    void setupUi(QDialog *TestDialog)
    {
        if (TestDialog->objectName().isEmpty())
            TestDialog->setObjectName(QString::fromUtf8("TestDialog"));
        TestDialog->resize(466, 109);
        formLayout = new QFormLayout(TestDialog);
        formLayout->setObjectName(QString::fromUtf8("formLayout"));
        inputLabel = new QLabel(TestDialog);
        inputLabel->setObjectName(QString::fromUtf8("inputLabel"));

        formLayout->setWidget(0, QFormLayout::LabelRole, inputLabel);

        inputLayout = new QHBoxLayout();
        inputLayout->setObjectName(QString::fromUtf8("inputLayout"));
        inputLayout->setSizeConstraint(QLayout::SetMaximumSize);
        inputLineEdit = new QLineEdit(TestDialog);
        inputLineEdit->setObjectName(QString::fromUtf8("inputLineEdit"));

        inputLayout->addWidget(inputLineEdit);

        inputBrowseButton = new QPushButton(TestDialog);
        inputBrowseButton->setObjectName(QString::fromUtf8("inputBrowseButton"));

        inputLayout->addWidget(inputBrowseButton);


        formLayout->setLayout(0, QFormLayout::FieldRole, inputLayout);

        outputLabel = new QLabel(TestDialog);
        outputLabel->setObjectName(QString::fromUtf8("outputLabel"));

        formLayout->setWidget(1, QFormLayout::LabelRole, outputLabel);

        outputLayout = new QHBoxLayout();
        outputLayout->setObjectName(QString::fromUtf8("outputLayout"));
        outputLayout->setSizeConstraint(QLayout::SetMaximumSize);
        outputLineEdit = new QLineEdit(TestDialog);
        outputLineEdit->setObjectName(QString::fromUtf8("outputLineEdit"));

        outputLayout->addWidget(outputLineEdit);

        outputBrowseButton = new QPushButton(TestDialog);
        outputBrowseButton->setObjectName(QString::fromUtf8("outputBrowseButton"));

        outputLayout->addWidget(outputBrowseButton);


        formLayout->setLayout(1, QFormLayout::FieldRole, outputLayout);

        buttonBox = new QDialogButtonBox(TestDialog);
        buttonBox->setObjectName(QString::fromUtf8("buttonBox"));
        buttonBox->setOrientation(Qt::Horizontal);
        buttonBox->setStandardButtons(QDialogButtonBox::Cancel|QDialogButtonBox::Ok);

        formLayout->setWidget(2, QFormLayout::SpanningRole, buttonBox);


        retranslateUi(TestDialog);
        QObject::connect(buttonBox, SIGNAL(accepted()), TestDialog, SLOT(accept()));
        QObject::connect(buttonBox, SIGNAL(rejected()), TestDialog, SLOT(reject()));

        QMetaObject::connectSlotsByName(TestDialog);
    } // setupUi

    void retranslateUi(QDialog *TestDialog)
    {
        TestDialog->setWindowTitle(QCoreApplication::translate("TestDialog", "Setarile testului", nullptr));
        inputLabel->setText(QCoreApplication::translate("TestDialog", "Input:", nullptr));
        inputBrowseButton->setText(QCoreApplication::translate("TestDialog", "Navigheaza", nullptr));
        outputLabel->setText(QCoreApplication::translate("TestDialog", "Output:", nullptr));
        outputBrowseButton->setText(QCoreApplication::translate("TestDialog", "Navigheaza", nullptr));
    } // retranslateUi

};

namespace Ui {
    class TestDialog: public Ui_TestDialog {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_TESTDIALOG_H
