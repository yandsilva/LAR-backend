import { DataSource } from "typeorm";
import { FALECONOSCO } from "./faleConosco.Entity";


export const faleConoscoProviders = [
    {
        provide: 'FALECONOSCO_REPOSITORY',
        useFactory: (DataSource: DataSource) => DataSource.getRepository(FALECONOSCO),
        inject: ['DATA_SOURCE'],
    },
];