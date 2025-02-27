import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('users')
    async createUser(@Body() createUserDto: CreateUserDto): Promise<any> {
        const user = await this.userService.createUser(createUserDto);
        return 'createUser';
    }
}
