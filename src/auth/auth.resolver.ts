import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginUserDto } from '../user/dto/login-user.dto';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => String)
  async login(
    @Args('loginUserInput') loginUserDto: LoginUserDto,
    @Context() context: any 
  ): Promise<string> {
    const { req } = context;
    console.log("Request Object in Login Resolver:", req);

    const { accessToken } = await this.authService.login(loginUserDto);
    return accessToken;
  }
}
