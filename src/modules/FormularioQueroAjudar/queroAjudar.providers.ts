import { DataSource } from "typeorm";
import { QUEROAJUDAR } from "./queroAjudar.Entity";



export const queroAjudarProviders = [
    {
        provide: 'QUEROAJUDAR_REPOSITORY',
        useFactory: (DataSource: DataSource) => DataSource.getRepository(QUEROAJUDAR),
        inject: ['DATA_SOURCE'],
    },
];