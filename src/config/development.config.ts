import { AppMode } from '@source/config/app.mode';

export default () => ({
    MODE                     : AppMode.DEVELOPMENT,
    URL_ROOT                 : '/api',
    PORT                     : '3031',
    JWT_SECRET               : 'ACTouSkiAbuSianUmELveydRIcKSMorOphiciontLopigAnulS',
    JWT_EXPIRES              : '30d',
    JWT_ALGORITHM            : 'HS256',
    JWT_REFRESH_TOKEN_SECRET : 'Zg1vricPuWQqX5cGHmoxkfl4SLy1817b*scU7G2IJ7^G9YMv8#',
    JWT_REFRESH_TOKEN_EXPIRES: '3600d',
    JWT_REFRESH_ALGORITHM    : 'HS256',
    REDIS                    : {
        URL: 'redis://localhost:6379'
    },
    MYSQL                    : {
        TYPE       : 'mysql',
        HOST       : 'localhost',
        USERNAME   : 'test',
        PASSWORD   : '123456',
        DATABASE   : 'book_api',
        SYNCHRONIZE: true
    },
    GOOGLE_BOOKS_API         : {
        BASE_URL: 'https://www.googleapis.com/books/v1/volumes'
    }
});