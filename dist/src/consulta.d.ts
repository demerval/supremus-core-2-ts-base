import * as Enums from "./enums";
export interface CampoConsulta {
    keyTabela: string;
    nomeCampo: string;
    alias: string;
    keyCampo: string;
    tipo: Enums.FieldType;
    funcao?: Enums.FuncoesSql;
}
export interface CampoFuncao {
    campo: string;
    alias: string;
    funcao?: Enums.FuncoesSql;
}
export interface CampoFuncaoPaginado extends CampoFuncao {
    key: string;
}
export interface ItemConsulta {
    key: string;
    tabela: string;
    campos?: (string | CampoFuncao)[];
    joins?: ItemJoinConsulta[];
    criterios?: CampoCriterio[];
    ordem?: string[];
    subConsultas?: SubConsulta[];
    paginado?: {
        pagina: number;
        qtdeRegistros: number;
        funcoes?: CampoFuncaoPaginado[];
    };
    porId?: {
        id: any;
    };
}
export interface ItemJoinConsulta {
    key: string;
    tabela: string;
    campos?: (string | CampoFuncao)[];
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
    campos: CampoConsulta[];
    row: Record<string, any>;
}
export interface ConsultaConfig {
    configs: Map<string, SqlConsultaConfig>;
    campos: CampoConsulta[];
    sql: string;
    sqlTotal?: string;
}
