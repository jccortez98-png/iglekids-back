import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ timestamps: true })
export class Noticia {
  @Prop()
  titulo: string;

  @Prop()
  contenido: string;
}

export const NoticiaSchema = SchemaFactory.createForClass(Noticia);
