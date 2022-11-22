import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { jwtConstants } from '../constants';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
    Strategy,
    'jwt-refresh',
) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwtConstants.secret,
            passReqToCallback: true,
        });
    }

    validate(req: Request, payload: any) {
        try {
          if (payload) {
            const refreshToken = req.get('Authorization').replace('Bearer', '').trim();
            return { refreshToken, ...payload };
          }
          throw new UnauthorizedException();
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    }
}