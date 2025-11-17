import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import * as bcrypt from "bcryptjs";
import { JwtService } from "@nestjs/jwt";

import { User, UserDocument } from "./user.schema";

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwt: JwtService
  ) {}

  async login(username: string, password: string) {
    const user = await this.userModel.findOne({ username });
    if (!user) throw new UnauthorizedException("Usuario no encontrado");

    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) throw new UnauthorizedException("Credenciales incorrectas");

    return {
      token: this.jwt.sign({ id: user._id, username: user.username }),
      user
    };
  }
}
