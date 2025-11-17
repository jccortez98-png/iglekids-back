import { Controller, Get, Post, Body, Param, Put } from "@nestjs/common";
import { AulaService } from "./aula.service";

@Controller("aulas")
export class AulaController {
  constructor(private service: AulaService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() dto: any) {
    return this.service.create(dto);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.service.findOne(id);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() dto: any) {
    return this.service.update(id, dto);
  }
}
