import { ErrorMessage } from '@errors/error.message';
import { ErrorStatus } from '@errors/error.status';
import { checkResult, CheckType } from '@helpers/check.result';
import { User } from '@modules/user/entities/user.entity';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
    (data: string, ctx: ExecutionContext): User => {
        const request = ctx.switchToHttp().getRequest();
        const user = request.user;
        checkResult(user,
            CheckType.IS_NULL_OR_UNDEFINED,
            ErrorStatus.BAD_REQUEST,
            ErrorMessage.USER_NOT_FOUND);
        return request.user;
    },
);