import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ){}
    

    async create(createUserDto: CreateUserDto): Promise<User>{
        const { email, password, role } = createUserDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = this.userRepository.create({ email, password: hashedPassword, role });
        return this.userRepository.save(user);

    }

    async findOneByEmail(email: string): Promise<User>{
        return this.userRepository.findOne({ where: { email } });
    }

    async update(id: number, updateUserDto: UpdateUserDto): Promise<void> {
        const { password, profile } = updateUserDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        await this.userRepository.update(id, { ...(password && { password: hashedPassword }), ...(profile && { profile }) });
    }

    async remove(id: number): Promise<void>{
        await this.userRepository.delete(id);
    }


}
