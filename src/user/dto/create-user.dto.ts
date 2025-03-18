import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsEnum, IsOptional, IsString, Length, Matches, MinLength } from 'class-validator';
import { UserRole } from '../entities/user.entity';

@InputType()
export class CreateUserDto {
  @Field(() => String)
  @IsString()
  name: string;

  @Field(() => String)
  @IsEmail({}, { message: 'Invalid email format' }) 
  email: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @Matches(/^\d{10}$/, { message: 'Phone number must be exactly 10 digits' }) 
  phone?: string;

  @Field(() => UserRole)
  @IsEnum(UserRole)
  @IsOptional() 
  role?: UserRole;

  @Field(() => String)
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;
}
