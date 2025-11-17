import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Horario {
  @Prop()
  aula: string;

  @Prop()
  dia: string;

  @Prop({ type: Array })
  items: { hora: string; actividad: string }[];
}

export const HorarioSchema = SchemaFactory.createForClass(Horario);
