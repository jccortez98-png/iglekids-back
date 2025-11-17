import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Aula {
  @Prop({ unique: true })
  nombre: string;

  @Prop()
  edadRecomendada: number;
}

export const AulaSchema = SchemaFactory.createForClass(Aula);
