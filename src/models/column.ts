export interface Column {
  field: string;
  header: string;
  type: ColumnType;
  sortable: boolean;
  editable: boolean;
}

export enum ColumnType {
  STRING = 1,
  INTEGER = 2,
  FLOAT = 3,
  DATE = 4,
  CURRENCY = 5,
}
