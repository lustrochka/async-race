import Component from '../basic-components/component';
import { getCars, setCar } from '../../api/api';
import { GarageResponse, CarResponse } from '../../types';
import { h3 } from '../basic-components/tags';
import CarsItem from './cars-item';
import names from '../../data/models.json';

class Cars extends Component {
  #title;

  #carsAmount;

  constructor() {
    super('div', 'cars');
    this.#title = h3('garage__title', 'Garage');
    this.#carsAmount = 0;
    this.appendChildren(this.#title);
    const promise = getCars(1);
    promise.then((res: GarageResponse) => {
      this.#carsAmount = Number(res.amount);
      this.#title.changeText(`Garage (${this.#carsAmount})`);
      for (let i = 0; i < res.cars.length; i++) {
        this.appendChildren(new CarsItem(res.cars[i].color, res.cars[i].name, res.cars[i].id));
      }
    });
  }

  createCar(color: string, name: string) {
    const promise = setCar(name, color);
    promise.then((res: CarResponse) => {
      this.appendChildren(new CarsItem(name, color, res.id));
      this.#title.changeText(`Garage (${++this.#carsAmount})`);
    });
  }

  generateCars() {
    const CARS_TO_GENERATE = 100;

    for (let i = 0; i < CARS_TO_GENERATE; i++) {
      const name = this.randomizeName();
      const color = this.randomizeColor();
      const promise = setCar(name, color);
      promise.then((res) => {
        this.appendChildren(new CarsItem(color, name, res.id));
      });
    }
    this.#carsAmount += 100;
    this.#title.changeText(`Garage(${this.#carsAmount})`);
  }

  randomize(max: number): number {
    return Math.floor(Math.random() * max);
  }

  randomizeName(): string {
    const index = this.randomize(names.length);
    let { name } = names[index];
    name = names[index].name;
    const modelInd = names[index].model.length;
    const model = names[index].model[this.randomize(modelInd)];
    return `${name} ${model}`;
  }

  randomizeColor(): string {
    const numbers = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += numbers[this.randomize(16)];
    }
    return color;
  }
}

export default Cars;
