import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';
import { AlumnoModule } from './alumno/alumno.module';
import { AulaModule } from './aula/aula.module';
import { AsistenciaModule } from './asistencia/asistencia.module';
import { NoticiaModule } from './noticia/noticia.module';
import { HorarioModule } from './horario/horario.module';
import { StatsModule } from './stats/stats.module';

@Module({
  imports: [
    //MongooseModule.forRoot(process.env.MONGO_URI || "mongodb://localhost:27017/iglekids"),
    MongooseModule.forRoot(process.env.MONGO_URI || "mongodb+srv://jccortez98_db_user:StuJNgFjVY7Wtn8f@cluster0.lr5xg9x.mongodb.net/iglekids"),
    AuthModule,
    AlumnoModule,
    AulaModule,
    AsistenciaModule,
    NoticiaModule,
    HorarioModule,
    StatsModule
  ]
})
export class AppModule {}
