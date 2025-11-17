import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Asistencia } from "./asistencia.schema";
import { AlumnoDocument } from "../alumno/alumno.schema";
import { AlumnoService } from "../alumno/alumno.service";

@Injectable()
export class AsistenciaService {
  constructor(
    @InjectModel(Asistencia.name) private model: Model<any>,
    private alumnoService: AlumnoService
  ) { }


  async scan(code: string) {
    const alumno = await this.alumnoService.findByCode(code);
    if (!alumno) throw new NotFoundException("Alumno no encontrado");

    const asistencia = await this.model.create({
      alumnoId: alumno._id,
      aula: alumno.aula,
      accion: "Ingreso",
      fecha: new Date()
    });

    return { ok: true, asistencia, alumno };
  }
}
