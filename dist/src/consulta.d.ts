import * as Enums from "./enums";
export interface ItemConsulta {
    key: string;
    tabela: string;
    campos?: string[];
    joins?: ItemJoinConsulta[];
    criterios?: CampoCriterio[];
    ordem?: string[];
    subConsultas?: SubConsulta[];
    paginado?: {
        pagina: number;
        qtdeRegistros: number;
        funcoes?: {
            key: string;
            campo: string;
            alias: string;
            funcao?: Enums.FuncoesSql;
        }[];
    };
    porId?: {
        id: any;
    };
}
export interface ItemJoinConsulta {
    key: string;
    tabela: string;
    campos?: string[];
    joinTipo?: 'inner' | 'left' | 'right';
    joinOn: [string, [string, string]];
    criterios?: CampoCriterio[];
}
export interface CampoCriterio {
    campo: string;
    valor: any;
    operador?: string;
    comparador?: 'and' | 'or';
}
export interface SubConsulta extends ItemConsulta {
    link: [string, string];
}
export interface SqlConsultaConfig {
    tabela: string;
    criterios?: CampoCriterio[];
}
export interface SubConsultaConfig {
    link: [string, string];
    campos: [string, string, string, string, Enums.FieldType][];
    row: Record<string, any>;
}
export interface ConsultaConfig {
    configs: Map<string, SqlConsultaConfig>;
    campos: [string, string, string, string, Enums.FieldType][];
    sql: string;
    sqlTotal?: string;
}
