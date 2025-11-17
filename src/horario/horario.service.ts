import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Horario } from "./horario.schema";

@Injectable()
export class HorarioService {
  constructor(
    @InjectModel(Horario.name) private model: Model<any>
  ) {}

  async getByAula(aula: string) {
    return this.model.find({ aula }).lean();
  }

  async create(dto: any) {
    return this.model.create(dto);
  }
}
