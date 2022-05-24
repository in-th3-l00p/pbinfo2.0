/********************************************************************************
** Form generated from reading UI file 'mainwindow.ui'
**
** Created by: Qt User Interface Compiler version 5.15.3
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_MAINWINDOW_H
#define UI_MAINWINDOW_H

#include <QtCore/QVariant>
#include <QtWidgets/QApplication>
#include <QtWidgets/QFormLayout>
#include <QtWidgets/QHBoxLayout>
#include <QtWidgets/QLabel>
#include <QtWidgets/QLineEdit>
#include <QtWidgets/QListWidget>
#include <QtWidgets/QMainWindow>
#include <QtWidgets/QPlainTextEdit>
#include <QtWidgets/QPushButton>
#include <QtWidgets/QStatusBar>
#include <QtWidgets/QVBoxLayout>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_MainWindow
{
public:
    QWidget *centralwidget;
    QFormLayout *formLayout;
    QLabel *titleLabel;
    QLineEdit *titleLineEdit;
    QLabel *descriptionLabel;
    QLineEdit *descriptionLineEdit;
    QLabel *statementLabel;
    QPlainTextEdit *statementTextEdit;
    QLabel *testsListLabel;
    QHBoxLayout *testsListLayout;
    QListWidget *testsList;
    QPushButton *addTestButton;
    QVBoxLayout *testsListButtons;
    QLabel *pathLabel;
    QHBoxLayout *pathLayout;
    QLineEdit *pathLineEdit;
    QPushButton *browseButton;
    QHBoxLayout *finalButtonsLayout;
    QPushButton *cancelButton;
    QPushButton *addButton;
    QStatusBar *statusbar;

    void setupUi(QMainWindow *MainWindow)
    {
        if (MainWindow->objectName().isEmpty())
            MainWindow->setObjectName(QString::fromUtf8("MainWindow"));
        MainWindow->resize(1200, 800);
        centralwidget = new QWidget(MainWindow);
        centralwidget->setObjectName(QString::fromUtf8("centralwidget"));
        formLayout = new QFormLayout(centralwidget);
        formLayout->setObjectName(QString::fromUtf8("formLayout"));
        titleLabel = new QLabel(centralwidget);
        titleLabel->setObjectName(QString::fromUtf8("titleLabel"));

        formLayout->setWidget(0, QFormLayout::LabelRole, titleLabel);

        titleLineEdit = new QLineEdit(centralwidget);
        titleLineEdit->setObjectName(QString::fromUtf8("titleLineEdit"));

        formLayout->setWidget(0, QFormLayout::FieldRole, titleLineEdit);

        descriptionLabel = new QLabel(centralwidget);
        descriptionLabel->setObjectName(QString::fromUtf8("descriptionLabel"));

        formLayout->setWidget(1, QFormLayout::LabelRole, descriptionLabel);

        descriptionLineEdit = new QLineEdit(centralwidget);
        descriptionLineEdit->setObjectName(QString::fromUtf8("descriptionLineEdit"));

        formLayout->setWidget(1, QFormLayout::FieldRole, descriptionLineEdit);

        statementLabel = new QLabel(centralwidget);
        statementLabel->setObjectName(QString::fromUtf8("statementLabel"));

        formLayout->setWidget(2, QFormLayout::LabelRole, statementLabel);

        statementTextEdit = new QPlainTextEdit(centralwidget);
        statementTextEdit->setObjectName(QString::fromUtf8("statementTextEdit"));

        formLayout->setWidget(2, QFormLayout::FieldRole, statementTextEdit);

        testsListLabel = new QLabel(centralwidget);
        testsListLabel->setObjectName(QString::fromUtf8("testsListLabel"));
        testsListLabel->setAlignment(Qt::AlignLeading|Qt::AlignLeft|Qt::AlignVCenter);

        formLayout->setWidget(3, QFormLayout::LabelRole, testsListLabel);

        testsListLayout = new QHBoxLayout();
        testsListLayout->setObjectName(QString::fromUtf8("testsListLayout"));
        testsList = new QListWidget(centralwidget);
        testsList->setObjectName(QString::fromUtf8("testsList"));

        testsListLayout->addWidget(testsList);

        addTestButton = new QPushButton(centralwidget);
        addTestButton->setObjectName(QString::fromUtf8("addTestButton"));
        QSizePolicy sizePolicy(QSizePolicy::Minimum, QSizePolicy::Expanding);
        sizePolicy.setHorizontalStretch(0);
        sizePolicy.setVerticalStretch(0);
        sizePolicy.setHeightForWidth(addTestButton->sizePolicy().hasHeightForWidth());
        addTestButton->setSizePolicy(sizePolicy);

        testsListLayout->addWidget(addTestButton);

        testsListButtons = new QVBoxLayout();
        testsListButtons->setObjectName(QString::fromUtf8("testsListButtons"));

        testsListLayout->addLayout(testsListButtons);


        formLayout->setLayout(3, QFormLayout::FieldRole, testsListLayout);

        pathLabel = new QLabel(centralwidget);
        pathLabel->setObjectName(QString::fromUtf8("pathLabel"));

        formLayout->setWidget(4, QFormLayout::LabelRole, pathLabel);

        pathLayout = new QHBoxLayout();
        pathLayout->setObjectName(QString::fromUtf8("pathLayout"));
        pathLineEdit = new QLineEdit(centralwidget);
        pathLineEdit->setObjectName(QString::fromUtf8("pathLineEdit"));

        pathLayout->addWidget(pathLineEdit);

        browseButton = new QPushButton(centralwidget);
        browseButton->setObjectName(QString::fromUtf8("browseButton"));

        pathLayout->addWidget(browseButton);


        formLayout->setLayout(4, QFormLayout::FieldRole, pathLayout);

        finalButtonsLayout = new QHBoxLayout();
        finalButtonsLayout->setObjectName(QString::fromUtf8("finalButtonsLayout"));
        finalButtonsLayout->setSizeConstraint(QLayout::SetFixedSize);
        finalButtonsLayout->setContentsMargins(-1, 0, -1, -1);
        cancelButton = new QPushButton(centralwidget);
        cancelButton->setObjectName(QString::fromUtf8("cancelButton"));

        finalButtonsLayout->addWidget(cancelButton);

        addButton = new QPushButton(centralwidget);
        addButton->setObjectName(QString::fromUtf8("addButton"));

        finalButtonsLayout->addWidget(addButton);


        formLayout->setLayout(5, QFormLayout::FieldRole, finalButtonsLayout);

        MainWindow->setCentralWidget(centralwidget);
        statusbar = new QStatusBar(MainWindow);
        statusbar->setObjectName(QString::fromUtf8("statusbar"));
        MainWindow->setStatusBar(statusbar);

        retranslateUi(MainWindow);

        QMetaObject::connectSlotsByName(MainWindow);
    } // setupUi

    void retranslateUi(QMainWindow *MainWindow)
    {
        MainWindow->setWindowTitle(QCoreApplication::translate("MainWindow", "Creator de probleme", nullptr));
        titleLabel->setText(QCoreApplication::translate("MainWindow", "Titlu:", nullptr));
        descriptionLabel->setText(QCoreApplication::translate("MainWindow", "Descriere:", nullptr));
        statementLabel->setText(QCoreApplication::translate("MainWindow", "Cerinta:", nullptr));
        testsListLabel->setText(QCoreApplication::translate("MainWindow", "Teste:", nullptr));
        addTestButton->setText(QCoreApplication::translate("MainWindow", "+", nullptr));
        pathLabel->setText(QCoreApplication::translate("MainWindow", "Locatie de salvare:", nullptr));
        browseButton->setText(QCoreApplication::translate("MainWindow", "Navigheaza", nullptr));
        cancelButton->setText(QCoreApplication::translate("MainWindow", "Anuleaza", nullptr));
        addButton->setText(QCoreApplication::translate("MainWindow", "Adauga", nullptr));
    } // retranslateUi

};

namespace Ui {
    class MainWindow: public Ui_MainWindow {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_MAINWINDOW_H
