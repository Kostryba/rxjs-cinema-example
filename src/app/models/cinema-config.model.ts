export interface ICinemaConfigModel {
  id: string;
  name: string;
  rows: IRowModel[];
}

export interface IRowModel {
  id: string;
  seats: ISeatModel[];
}

export interface ISeatModel {
  id: string;
  row: number;
  position: number;
  selected: boolean;
  occupied: boolean;
}
