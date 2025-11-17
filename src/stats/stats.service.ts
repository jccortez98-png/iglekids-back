import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AlumnoDocument } from "../alumno/alumno.schema";

@Injectable()
export class StatsService {
  constructor(
    @InjectModel("Alumno") private alumnos: Model<AlumnoDocument>
  ) {}

  async porEdad() {
    return this.alumnos.aggregate([
      { $group: { _id: "$edad", total: { $sum: 1 } } }
    ]);
  }

  async porAula() {
    return this.alumnos.aggregate([
      { $group: { _id: "$aula", total: { $sum: 1 } } }
    ]);
  }
}
