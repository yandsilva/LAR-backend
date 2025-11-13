import { DataSource } from "typeorm";
import { PRECISOAJUDA } from "./precisoAjuda.Entity";



export const precisoAjudaProviders = [
    {
        provide: 'PRECISOAJUDA_REPOSITORY',
        useFactory: (DataSource: DataSource) => DataSource.getRepository(PRECISOAJUDA),
        inject: ['DATA_SOURCE'],
    },
];