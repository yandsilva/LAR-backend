import { Module } from "@nestjs/common";
import { faleConoscoController } from "./faleConosco.controller";
import { FormularioArmazenados } from "./faleConosco.dm";

@Module({
    controllers: [faleConoscoController],
    providers: [FormularioArmazenados],
})
export class FaleConoscoModule {}