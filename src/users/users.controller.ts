import { Controller } from '@nestjs/common';
import { UsersService } from './users.service'; 
import { CreateUserDto } from './create-user.dto';
;

@Controller('users')
export class UsersController {
    
    constructor(
        private readonly usersService: UsersService,
    ){}



}
