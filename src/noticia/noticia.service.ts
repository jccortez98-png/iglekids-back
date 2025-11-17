import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Noticia } from "./noticia.schema";

@Injectable()
export class NoticiaService {
  constructor(@InjectModel(Noticia.name) private model: Model<any>) {}

  async findAll() {
    return this.model.find().sort({ createdAt: -1 }).lean();
  }

  async create(dto: any) {
    return this.model.create(dto);
  }
}
