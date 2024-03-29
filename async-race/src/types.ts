export type Items = {
  [key: string]: string;
};

export type CarResponse = {
  name: string;
  color: string;
  id: number;
};

export type GarageResponse = {
  amount: string | null;
  cars: CarResponse[];
};

export type WinnerData = {
  [key: string]: number;
};

export type WinnersResponse = {
  amount: string | null;
  winners: WinnerData[];
};

export interface WinnerResponse {
  status: boolean;
  data: WinnerData;
}

export type Callback = (name: string, color: string) => void;

export type CarsItemArgs = {
  color: string;
  name: string;
  id: number;
  callback: () => void;
};
