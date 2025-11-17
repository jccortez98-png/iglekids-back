import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Aula, AulaSchema } from "./aula.schema";
import { AulaService } from "./aula.service";
import { AulaController } from "./aula.controller";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Aula.name, schema: AulaSchema }])
  ],
  controllers: [AulaController],
  providers: [AulaService],
  exports: [AulaService]
})
export class AulaModule {}
