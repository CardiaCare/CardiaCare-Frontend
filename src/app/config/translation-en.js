(function () {
    'use strict'

    angular.module('angularMaterialCardiaCare')
            .config(function ($translateProvider) {
                $translateProvider.translations('en', {
                    FIRST_NAME: 'First name',
                    SERNAME: 'Sername',
                    SECOND_NAME: 'Second Name',
                    ORGANIZATION: 'Organization',
                    EMAIL:'Email',
                    BUTTON_UP_INFO:'Update information',
                    ANSWER:'Answer',
                    SCORE: 'Score',
                    ROLE: 'Role',
                    BUTTON_INVITE: 'Invite person',
                    BUTTON_SHOW_INV: 'Show invites',
                    YOU_INV: 'Your Invites',
                    OK:'OK',
                    NEW_PWD: 'New Password',
                    REC_CODE: 'Recovery Code',
                    BUTTON_GET_CODE: 'Get Code',
                    BUTTON_RESET_PWD: 'Reset password',
                    SHORD_DESC: 'Short description',
                    VERSION: 'Version',
                    BUTTON_DOWNLOAD: 'Download',
                    QUESTION: 'Question',
                    TYPE: 'Type',
                    BUTTON_FIX: 'Fix',
                    BUTTON_ADD_NEW: 'Add new',
                    SNISL: 'snils',
                    SNAIL_REQ: 'You must supply a snils.',
                    SNILS_PAT: 'That doesn\'t look like a valid snils.',
                    SNILS_MAXLEN: 'Don\'t use the long version silly...we don\'t need to be that specific...',
                    INN: 'inn',
                    INN_REQ: 'You must supply a inn.',
                    INN_PAT: 'That doesn\'t look like a valid inn.',
                    INN_MAXLEN:' Don\'t use the long version silly...we don\'t need to be that specific...',
                    BIRTHDAY: 'Birthday',
                    BIRTHPLACE: 'Birthplace',
                    GENDER: 'Gender',
                    MALE: 'Male',
                    FEMALE: 'Female',
                    BP_DIARY:'Bloodpressure diary',
                    CALENDAR: 'Calendar',
                    DOCTOR: 'Doctor',
                    INVITE: 'Invite',
                    PATIENT_LIST: 'Patients List',
                    QUESTIONNAIRES: 'Questionnaires',
                    QUESTIONNAIRE_CONS: 'Questionnaire Constructor',
                    RESET_PWD: 'Reset password',
                    PWD: 'Password',
                    FORGOT_PWD: 'Forgot password?',
                    SING_UP: 'Sign up',
                    SING_IN: 'Sign In',
                    LOG_OUT: 'Log Out',
                    DOCTOR_ACC: 'Doctor Account',
                    PATIENT: 'Patient', 
                    FEEDBACKS_LIST: 'Feedbacks List',
                    FEEDBACK: 'Feedback',
                    RECOVERY: 'Recovery',
                    INV_CODE: 'Invite Code',
                    BUTTON_HAVE_ACC: 'Already have an account?',
                    INCORRECT_PWD_EMAIL: 'Incorrect password or email.',
                    SEARCH: 'Search',
                    PROFILE: 'Profile',
                    BIOSIGNALS: 'Biosignals',
                    VOLUNTEER: 'Volunteer',
                    CHIEF:'Chief',
                    DONE: 'Done',
                    PWD_RECOVERY: 'Password recovery',
                    ENTER_EMAIL: 'Enter email for recovery code sending',
                    SEND:'Send',
                    CANSEL:'Cansel',
                    LOGOUT:'Logout',
                    SURE_LOGOUT: 'Are you sure you want to log out?',
                    YES:'Yes',
                    NO:'No',
                    ERROR_CODE: 'Error in code',
                    SENT_CODE: "The code sent to your email",
                    ALREADY_SENT: "The code has already been sent",
                    DELETE_QST: 'Do you want to delete the questionnaire?'
                });
                
                $translateProvider.preferredLanguage('ru');
            });

})();