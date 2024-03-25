import { CarResponse, GarageResponse, WinnerData, WinnerResponse, WinnersResponse } from '../types';

const BASE_URL = 'http://127.0.0.1:3000';

export async function getCars(page: number): Promise<GarageResponse> {
  const url = `${BASE_URL}/garage?_page=${page}&_limit=7`;
  const response = await fetch(url);
  const headers = response.headers.get('X-Total-Count');
  const carsArray = await response.json();
  const result = { amount: headers, cars: carsArray };
  return result;
}

export async function getCar(id: number): Promise<CarResponse> {
  const response = await fetch(`${BASE_URL}/garage/${id}`);
  const result = await response.json();
  return result;
}

export async function setCar(name: string, color: string): Promise<CarResponse> {
  const newCar = { name, color };
  const response = await fetch(`${BASE_URL}/garage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newCar),
  });
  const result = await response.json();
  return result;
}

export async function deleteCar(id: number): Promise<CarResponse> {
  const response = await fetch(`${BASE_URL}/garage/${id}`, {
    method: 'DELETE',
  });
  const result = await response.json();
  return result;
}

export async function updateCar(id: number, name: string, color: string): Promise<CarResponse> {
  const newCar = { name, color };
  const response = await fetch(`${BASE_URL}/garage/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newCar),
  });
  const result = await response.json();
  return result;
}

export async function startCarEngine(id: number): Promise<number> {
  const params = new URLSearchParams({
    id: `${id}`,
    status: 'started',
  });
  const response = await fetch(`${BASE_URL}/engine?${params}`, {
    method: 'PATCH',
  });
  const result = await response.json();
  const time = result.distance / result.velocity;
  return time;
}

export async function drive(id: number): Promise<boolean> {
  const params = new URLSearchParams({
    id: `${id}`,
    status: 'drive',
  });
  const response = await fetch(`${BASE_URL}/engine?${params}`, {
    method: 'PATCH',
  });
  const res = await response;
  return res.ok;
}

export async function stopCarEngine(id: number): Promise<number> {
  const params = new URLSearchParams({
    id: `${id}`,
    status: 'stopped',
  });
  const response = await fetch(`${BASE_URL}/engine?${params}`, {
    method: 'PATCH',
  });
  const result = await response.json();
  const time = result.distance / result.velocity;
  return time;
}

export async function getWinners(page: number): Promise<WinnersResponse> {
  const url = `${BASE_URL}/winners?_page=${page}&_limit=10`;
  const response = await fetch(url);
  const headers = response.headers.get('X-Total-Count');
  const winnersArray = await response.json();
  const result = { amount: headers, winners: winnersArray };
  return result;
}

export async function getWinner(id: number): Promise<WinnerResponse> {
  const response = await fetch(`${BASE_URL}/winners/${id}`);
  const winnerStatus = response.ok;
  const winnerInfo = await response.json();
  const result = { status: winnerStatus, data: winnerInfo };
  return result;
}

export async function createWinner(data: WinnerData): Promise<WinnerData> {
  const response = await fetch(`${BASE_URL}/winners`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
}

export async function updateWinner(data: WinnerData): Promise<WinnerData> {
  const response = await fetch(`${BASE_URL}/winners/${data.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ wins: data.wins, time: data.time }),
  });
  const result = await response.json();
  return result;
}

export async function deleteWinner(id: number): Promise<WinnerData> {
  const response = await fetch(`${BASE_URL}/winners/${id}`, {
    method: 'DELETE',
  });
  const result = await response.json();
  return result;
}
