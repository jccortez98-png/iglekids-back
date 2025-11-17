import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ timestamps: true })
export class Asistencia {
  @Prop()
  alumnoId: string;

  @Prop()
  aula: string;

  @Prop()
  accion: string; // Ingreso, Salida

  @Prop()
  fecha: Date;
}

export const AsistenciaSchema = SchemaFactory.createForClass(Asistencia);
