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
  position: number;
  selected: boolean;
  occupied: boolean;
}
