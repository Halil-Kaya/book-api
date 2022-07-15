export enum ErrorStatus {
    BAD_REQUEST           = 400,
    UNAUTHORIZED          = 401,
    FORBIDDEN_RESOURCE    = 403,
    INTERNAL_SERVER_ERROR = 500,
    I_AM_A_TEAPOT         = 418,
    UNPROCESSABLE_ENTITY  = 422,
    FAILED_DEPENDENCY     = 424,
    NOT_IMPLEMENTED       = 501,
    SERVICE_UNAVAILABLE   = 503
}
