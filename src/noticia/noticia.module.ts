import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Noticia, NoticiaSchema } from "./noticia.schema";
import { NoticiaService } from "./noticia.service";
import { NoticiaController } from "./noticia.controller";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Noticia.name, schema: NoticiaSchema }])
  ],
  controllers: [NoticiaController],
  providers: [NoticiaService]
})
export class NoticiaModule {}
