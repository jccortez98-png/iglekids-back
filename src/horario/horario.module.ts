import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Horario, HorarioSchema } from "./horario.schema";
import { HorarioService } from "./horario.service";
import { HorarioController } from "./horario.controller";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Horario.name, schema: HorarioSchema }])
  ],
  controllers: [HorarioController],
  providers: [HorarioService],
  exports: [HorarioService]
})
export class HorarioModule {}
