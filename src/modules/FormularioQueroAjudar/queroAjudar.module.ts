import { Module } from "@nestjs/common";
import { QueroAjudarController } from "./queroAjudar.controller";
import { FormularioArmazenadosAjudar } from "./queroAjudar.dm";

@Module({
    controllers: [QueroAjudarController],
    providers: [FormularioArmazenadosAjudar],
})
export class QueroAjudarModule {}