import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    async createUser(createUserDto: CreateUserDto): Promise<any> {}
}
