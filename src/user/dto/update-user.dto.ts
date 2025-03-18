import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsString, IsOptional, IsUUID, IsEmail, Matches } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

@InputType()
export class UpdateUserDto extends PartialType(CreateUserDto) {
  @Field(() => String)
  @IsUUID('4', { message: 'Invalid user ID format' })
  id: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @Matches(/^\d{10}$/, { message: 'Phone number must be exactly 10 digits' })
  phone?: string;
}
