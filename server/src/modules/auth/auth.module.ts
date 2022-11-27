import { RefreshTokenStrategy } from "./strategies/refreshToken.strategy";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { LocalStrategy } from "./strategies/local.strategy";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { forwardRef, Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants";
import { AccountsModule } from "../accounts/accounts.module";
import { FacebookStrategy } from "./strategies/facebook.strategy";

@Module({
  imports: [
    forwardRef(() => AccountsModule),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "2d" },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    RefreshTokenStrategy,
    FacebookStrategy,
  ],
  exports: [AuthService],
})
export class AuthModule {}
