import { Controller, Get, Post, Body } from "@nestjs/common";
import { NoticiaService } from "./noticia.service";

@Controller("noticias")
export class NoticiaController {
  constructor(private service: NoticiaService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() dto: any) {
    return this.service.create(dto);
  }
}
