import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Asistencia, AsistenciaSchema } from "./asistencia.schema";
import { AsistenciaService } from "./asistencia.service";
import { AsistenciaController } from "./asistencia.controller";
import { AlumnoModule } from "src/alumno/alumno.module";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Asistencia.name, schema: AsistenciaSchema }]),
    AlumnoModule
  ],
  controllers: [AsistenciaController],
  providers: [AsistenciaService],
  exports: [AsistenciaService]
})
export class AsistenciaModule {}
