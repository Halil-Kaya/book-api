import { AppMode } from "@source/config/app.mode";

export default () => ({
  MODE                     : AppMode.DEVELOPMENT,
  URL_ROOT                 : "/api",
  PORT                     : "3031",
  MONGO_CONNECTION_STRING  : "mongodb://localhost:27017/book_app",
  JWT_SECRET               : "ACTouSkiAbuSianUmELveydRIcKSMorOphiciontLopigAnulS",
  JWT_EXPIRES              : "30d",
  JWT_ALGORITHM            : "HS256",
  JWT_REFRESH_TOKEN_SECRET : "Zg1vricPuWQqX5cGHmoxkfl4SLy1817b*scU7G2IJ7^G9YMv8#",
  JWT_REFRESH_TOKEN_EXPIRES: "3600d",
  JWT_REFRESH_ALGORITHM    : "HS256",
  REDIS                    : {
    URL : "redis://localhost:6379",
    HOST: "localhost",
    PORT: 6380
  }
});