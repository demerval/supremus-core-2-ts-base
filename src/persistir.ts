import { Status } from './enums';
import { ItemConsulta } from './consulta';

export interface ConfigPersist {
  persistir: ItemPersist[];
  consultar?: ItemPersitConsulta[];
}

export interface ItemPersist {
  id: string;
  status: Status;
  dados: any;
}

export interface ItemPersitConsulta extends ItemConsulta {
  idConsulta?: { campo: string, campoResult: [string, string] };
}