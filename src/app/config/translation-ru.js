(function () {
    'use strict'

    angular.module('angularMaterialCardiaCare')
            .config(function ($translateProvider) {
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
                    BUTTON_HAVE_ACC: 'Уже есть аккаунт?',
                    INCORRECT_PWD_EMAIL: 'Неверный email или пароль.',
                    SEARCH: 'Поиск',
                    PROFILE: 'Профиль',
                    BIOSIGNALS: 'Сигналы',
                    VOLUNTEER: 'Волонтер',
                    CHIEF: 'Главный врач',
                    DONE: 'Выполнено',
                    PWD_RECOVERY: 'Восстановление пароля',
                    ENTER_EMAIL: 'Введите email дял отправки кода восстановления',
                    SEND:'Отправить',
                    CANSEL:'Отмена',
                    LOGOUT:'ВЫход',
                    SURE_LOGOUT: 'Вы действительно хотите выйти из аккаунта?',
                    YES:'Да',
                    NO:'Нет',
                    ERROR_CODE: 'Ошибка в коде восстановления',
                    SENT_CODE: "Код восстановления отправлена на ваш email",
                    ALREADY_SENT: "Код воостановления уже был отправлен",
                    DELETE_QST: 'Вы хотите удалить анкету?',
                    ACC: 'Аккаунт'
                });
            });

})();

