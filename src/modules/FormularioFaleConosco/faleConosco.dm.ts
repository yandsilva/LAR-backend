import { Injectable } from "@nestjs/common";
import { FaleConoscoEntity } from "./faleConosco.Entity";


@Injectable()
export class FormularioArmazenados {
    #formulario: FaleConoscoEntity[] = [];

    AdicionarFormulario (formulario: FaleConoscoEntity) {
        this.#formulario.push(formulario);
    }

  private BuscaPorID(id: string): FaleConoscoEntity {
        const possivelFormulario = this.#formulario.find(
            formularioSalvo => formularioSalvo.id === id
        );

        if (!possivelFormulario) {
            throw new Error('Usuário não encontrado');
        }
        return possivelFormulario;
    }

     async removeFormulario(id: string) {
        const formulario = this.BuscaPorID(id);

        this.#formulario = this.#formulario.filter(
            formularioSalvo => formularioSalvo.id !== id
        );

        return formulario;
    }

    get Formulario() {
        return this.#formulario;
    }
}
