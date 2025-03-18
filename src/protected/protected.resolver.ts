import { UseGuards } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Resolver()
export class ProtectedResolver {
  @Query(() => String)
  @UseGuards(AuthGuard('jwt'))
  hello() {
    return "This is a protected route!";
  }
}
