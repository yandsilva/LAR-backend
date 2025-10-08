import { Injectable } from "@nestjs/common";
import { QueroAjudaEntity } from "./queroAjudar.Entity";


@Injectable()
export class FormularioArmazenadosAjudar {
    #formulario: QueroAjudaEntity[] = [];

    AdicionarFormulario (formulario: QueroAjudaEntity) {
        this.#formulario.push(formulario);
    }



    get Formulario() {
        return this.#formulario;
    }
}
