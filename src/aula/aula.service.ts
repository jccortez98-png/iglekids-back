import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Aula } from "./aula.schema";

@Injectable()
export class AulaService {
  constructor(@InjectModel(Aula.name) private model: Model<any>) {}

  async create(dto: any) {
    return this.model.create(dto);
  }

  async findAll() {
    return this.model.find().lean();
  }

  async findOne(id: string) {
    return this.model.findById(id).lean();
  }

  async update(id: string, dto: any) {
    return this.model.findByIdAndUpdate(id, dto, { new: true });
  }
}
