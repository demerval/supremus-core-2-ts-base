import { Status } from './enums';
import { ItemConsulta } from './consulta';
export interface ConfigPersist {
    persistir: ItemPersist[];
    persistirSql?: ItemPersistSql[];
    consultar?: ItemPersitConsulta[];
}
export interface ItemPersist {
    id: string;
    status: Status;
    dados: any;
}
export interface ItemPersistSql {
    id: string;
    retornar: boolean;
    sql: string;
}
export interface ItemPersitConsulta extends ItemConsulta {
    idConsulta?: {
        campo: string;
        campoResult: [string, string];
    };
}
