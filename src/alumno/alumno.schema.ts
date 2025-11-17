import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type AlumnoDocument = Alumno & Document;

@Schema({ timestamps: true })
export class Alumno {

  @Prop({ unique: true })
  code: string; // código del niño

  @Prop()
  nombre: string;

  @Prop()
  edad: number;

  @Prop()
  aula: string;

  @Prop()
  contacto: string;

  @Prop()
  qr: string; // dataURL del QR
}

export const AlumnoSchema = SchemaFactory.createForClass(Alumno);
