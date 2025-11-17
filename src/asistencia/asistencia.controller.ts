import { Controller, Post, Body } from "@nestjs/common";
import { AsistenciaService } from "./asistencia.service";

@Controller("asistencias")
export class AsistenciaController {
  constructor(private service: AsistenciaService) {}

  @Post("scan")
  scan(@Body() body: { code: string }) {
    return this.service.scan(body.code);
  }
}
