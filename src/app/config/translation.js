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
                    INCORRECT_PWD_EMAIL: 'Incorrect password or email.'
                    
                });
                $translateProvider.translations('ru', {
                    FIRST_NAME: 'Имя',
                    SERNAME: 'Отчество',
                    SECOND_NAME: 'Фамилия',
                    ORGANIZATION: 'Организация',
                    EMAIL:'Email',
                    BUTTON_UP_INFO:'Обновить информацию',
                    ANSWER:'Ответ',
                    SCORE: 'Вес',
                    ROLE: 'Роль',
                    BUTTON_INVITE: 'Пригласить',
                    BUTTON_SHOW_INV: 'Список приглашений',
                    YOU_INV: 'Ваши приглашения',
                    OK:'OK',
                    NEW_PWD: 'Новый пароль',
                    REC_CODE: 'Код восстановления',
                    BUTTON_GET_CODE: 'Получить код',
                    BUTTON_RESET_PWD: 'Обновить пароль',
                    SHORD_DESC: 'Краткое описание',
                    VERSION: 'Версия',
                    BUTTON_DOWNLOAD: 'Загрузить',
                    QUESTION: 'Вопрос',
                    TYPE: 'Тип',
                    BUTTON_FIX: 'Зафиксировать',
                    BUTTON_ADD_NEW: 'Добавить новый',
                    SNISL: 'СНИЛС',
                    SNAIL_REQ: 'Вы должны ввести номер СНИЛС',
                    SNILS_PAT: 'Не СНИЛС',
                    SNILS_MAXLEN: 'Не совпадает длина',
                    INN: 'inn',
                    INN_REQ: 'Вы должны ввести ИНН',
                    INN_PAT: 'Не ИНН',
                    INN_MAXLEN:' Не совпадает длина',
                    BIRTHDAY: 'День рождения',
                    BIRTHPLACE: 'Место рождения',
                    GENDER: 'Пол',
                    MALE: 'Мужской',
                    FEMALE: 'Женский',
                    BP_DIARY:'Дневник давления',
                    CALENDAR: 'Календарь',
                    DOCTOR: 'Врач',
                    INVITE: 'Приглашение',
                    PATIENT_LIST: 'Список пациентов',
                    QUESTIONNAIRES: 'Анкеты',
                    QUESTIONNAIRE_CONS: 'Конструктор анкет',
                    RESET_PWD: 'Обновление пароля',
                    PWD: 'Пароль',
                    FORGOT_PWD: 'Забыли пароль?',
                    SING_UP: 'Зарегистрироваться',
                    SING_IN: 'Вход',
                    LOG_OUT: 'Выход',
                    DOCTOR_ACC: 'Кабинет врача',
                    PATIENT: 'Пациент', 
                    FEEDBACKS_LIST: 'Список ответников',
                    FEEDBACK: 'Ответник',
                    RECOVERY: 'Восстановление пароля',
                    INV_CODE: 'Код приглашения',
                    BUTTON_HAVE_ACC: 'Уже есть аккаунт?'

                });
                $translateProvider.preferredLanguage('ru');
            });

})();
