import { Controller, Get, Param, Post, Body } from "@nestjs/common";
import { HorarioService } from "./horario.service";

@Controller("horarios")
export class HorarioController {
  constructor(private service: HorarioService) {}

  @Get(":aula")
  findByAula(@Param("aula") aula: string) {
    return this.service.getByAula(aula);
  }

  @Post()
  create(@Body() dto: any) {
    return this.service.create(dto);
  }
}
