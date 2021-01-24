import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ) {}

  @Post('/signup')
  signUp(@Body(ValidationPipe) authCredetialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.signUp(authCredetialsDto);
  }
  
  @Post('/signin')
  signIn(@Body(ValidationPipe) authCredetialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredetialsDto);
  }
}
