import { Controller, Get } from "@nestjs/common";
import { StatsService } from "./stats.service";

@Controller("stats")
export class StatsController {
  constructor(private service: StatsService) {}

  @Get("edad")
  porEdad() {
    return this.service.porEdad();
  }

  @Get("aula")
  porAula() {
    return this.service.porAula();
  }
}
