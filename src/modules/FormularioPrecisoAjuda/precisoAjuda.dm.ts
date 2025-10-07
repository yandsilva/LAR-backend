import { Injectable } from "@nestjs/common";
import { PrecisoAjudaEntity } from "./precisoAjuda.Entity";


@Injectable()
export class FormularioArmazenados {
    #formulario: PrecisoAjudaEntity[] = [];

    AdicionarFormulario (formulario: PrecisoAjudaEntity) {
        this.#formulario.push(formulario);
    }



    get Formulario() {
        return this.#formulario;
    }
}
