import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Alumno, AlumnoDocument } from "./alumno.schema";
import * as QRCode from "qrcode";

@Injectable()
export class AlumnoService {
  constructor(
    @InjectModel(Alumno.name) private model: Model<AlumnoDocument>
  ) {}

  async create(dto: any) {
    const code = dto.code || `ALUM-${Date.now()}`;
    const qr = await QRCode.toDataURL(code);

    return await this.model.create({ ...dto, code, qr });
  }

  async findAll() {
    return this.model.find().lean();
  }

  async findByCode(code: string) {
    return this.model.findOne({ code }).lean();
  }

  async update(id: string, dto: any) {
  // Obtener alumno actual
  const alumnoActual = await this.model.findById(id).lean();
  if (!alumnoActual) throw new Error("Alumno no encontrado");

  // Si el código viene en dto se usa, si no, se mantiene el actual
  const code = dto.code || alumnoActual.code;

  // Generar nuevo QR SIEMPRE (igual que create)
  const qr = await QRCode.toDataURL(code);

  return this.model.findByIdAndUpdate(
    id,
    { ...dto, code, qr },
    { new: true }
  );
}

}
