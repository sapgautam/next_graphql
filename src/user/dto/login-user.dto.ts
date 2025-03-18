import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsString, MinLength } from 'class-validator';

@InputType()
export class LoginUserDto {
  @Field(() => String)
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @Field(() => String)
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;
}
