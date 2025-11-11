import { Module } from "@nestjs/common";
import { QueroAjudarController } from "./queroAjudar.controller";
import { DatabaseModule } from "src/database/database.module";
import { queroAjudarProviders } from "./queroAjudar.providers";
import { QueroAjudarService } from "./queroAjudar.service";

@Module({
    imports: [DatabaseModule],
    controllers: [QueroAjudarController],
    providers: [
        ...queroAjudarProviders,
        QueroAjudarService
    ],
})
export class QueroAjudarModule {}