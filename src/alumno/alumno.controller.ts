import { Controller, Get, Post, Param, Body, Put } from "@nestjs/common";
import { AlumnoService } from "./alumno.service";

@Controller("alumnos")
export class AlumnoController {
  constructor(private service: AlumnoService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(":code")
  findByCode(@Param("code") code: string) {
    return this.service.findByCode(code);
  }

  @Post()
  create(@Body() dto: any) {
    return this.service.create(dto);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() dto: any) {
    return this.service.update(id, dto);
  }
}
