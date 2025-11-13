import { Module } from "@nestjs/common";
import { PrecisoAjudaController } from "./precisoAjuda.controller";
import { DatabaseModule } from "src/database/database.module";
import { precisoAjudaProviders } from "./precisoAjuda.providers";
import { PrecisoAjudaService } from "./precisoAjuda.service";

@Module({
    imports: [DatabaseModule],
    controllers: [PrecisoAjudaController],
    providers: [
            ...precisoAjudaProviders,
            PrecisoAjudaService
        ],
})
export class PrecisoAjudaModule {}