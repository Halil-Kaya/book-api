import { JWTTokenHelper } from '@helpers/jwt.token.helper';
import { AuthController } from '@modules/auth/controller/auth.controller';
import { AuthService } from '@modules/auth/service/auth.service';
import { UserModule } from '@modules/user/user.module';
import { Module, Global } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JWTStrategy } from '@source/app/core/strategies/jwt.strategy';
import { Environment } from '@source/config/environment';
import { JWTRefreshStrategy } from '@source/app/core/strategies/jwt-refresh.strategy';

@Global()
@Module({
    imports    : [
        JwtModule.registerAsync({
            imports   : [],
            useFactory: async (configService: ConfigService<Environment>) => ({
                secret: configService.get<string>('JWT_SECRET')
            }),
            inject    : [ ConfigService ]
        }),
        UserModule
    ],
    controllers: [ AuthController ],
    providers  : [ AuthService, JWTStrategy, JWTRefreshStrategy, JWTTokenHelper ],
    exports    : [ AuthService ]
})
export class AuthModule {
}