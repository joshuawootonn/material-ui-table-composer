export interface IColumn {
  label: string;
  type: IDataTypes;
  key: string;
  iterator?: string[];
  width: number;
  disableSort?: boolean;
  numeric?: boolean;
}

export interface IData {
  firstName: string;
  lastName: string;
  age: number;
}

export type IDataTypes = "STRING" | "NUMBER";
