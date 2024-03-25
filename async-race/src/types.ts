export type Items = {
  [key: string]: string;
};

export interface CarResponse {
  name: string;
  color: string;
  id: number;
}

export interface GarageResponse {
  amount: string | null;
  cars: CarResponse[];
}

export interface WinnerData {
  [key: string]: number;
}

export interface WinnersResponse {
  amount: string | null;
  winners: WinnerData[];
}

export interface WinnerResponse {
  status: boolean;
  data: WinnerData;
}
