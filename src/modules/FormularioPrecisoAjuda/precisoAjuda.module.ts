import { Module } from "@nestjs/common";
import { PrecisoAjudaController } from "./precisoAjuda.controller";
import { FormularioArmazenados } from "./precisoAjuda.dm";

@Module({
    controllers: [PrecisoAjudaController],
    providers: [FormularioArmazenados],
})
export class UsuarioModule {}