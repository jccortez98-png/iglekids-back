import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Alumno, AlumnoSchema } from "./alumno.schema";
import { AlumnoService } from "./alumno.service";
import { AlumnoController } from "./alumno.controller";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Alumno.name, schema: AlumnoSchema }])
  ],
  controllers: [AlumnoController],
  providers: [AlumnoService],
  exports: [AlumnoService]
})
export class AlumnoModule {}
