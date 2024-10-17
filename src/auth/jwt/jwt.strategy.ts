import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private userService: UsersService) {
        super({
            jwtFormRequest: ExtractJwt.formAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrkey: 'secretKey',
        });
    }

    async validate(payload: any) {
        const user = await this.userService.findOneByEmail(payload.email);
        if (!user) {
            throw new UnauthorizedException('Unauthorized');
        }
        return user;
    }
}