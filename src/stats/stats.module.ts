import { Module } from "@nestjs/common";
import { StatsService } from "./stats.service";
import { StatsController } from "./stats.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Alumno, AlumnoSchema } from "../alumno/alumno.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Alumno.name, schema: AlumnoSchema }])
  ],
  controllers: [StatsController],
  providers: [StatsService]
})
export class StatsModule {}
