import Component from '../basic-components/component';
import { getCars, setCar } from '../../api/api';
import { GarageResponse, CarResponse } from '../../types';
import { h3 } from '../basic-components/tags';
import CarsItem from './cars-item';
import { getDomElement } from '../../utils/getDomElement';
import names from '../../data/models.json';

const CARS_PER_PAGE = 7;

class Cars extends Component {
  #title;

  #carsAmount;

  #amountPerPage;

  #changePage;

  constructor(page: number, callback: () => void) {
    super('div', 'cars');
    this.#title = h3('garage__title', 'Garage');
    this.#carsAmount = 0;
    this.#amountPerPage = 0;
    this.#changePage = callback;
    this.appendChildren(this.#title);
    const promise = getCars(page);
    promise.then((res: GarageResponse) => {
      this.#carsAmount = Number(res.amount);
      this.#title.changeText(`Garage (${this.#carsAmount})`);
      this.#amountPerPage = res.cars.length;
      for (let i = 0; i < res.cars.length; i++) {
        this.appendChildren(
          new CarsItem({
            color: res.cars[i].color,
            name: res.cars[i].name,
            id: res.cars[i].id,
            callback: this.#changePage,
          })
        );
      }
    });
  }

  getAmount() {
    return this.#carsAmount;
  }

  createCar(name: string, color: string) {
    const promise = setCar(name, color);
    promise.then((res: CarResponse) => {
      if (this.#amountPerPage < CARS_PER_PAGE) {
        this.appendChildren(new CarsItem({ color, name, id: res.id, callback: this.#changePage }));
        this.#title.changeText(`Garage (${++this.#carsAmount})`);
        this.#amountPerPage++;
      } else {
        getDomElement('#next-button').removeAttribute('disabled');
      }
    });
  }

  generateCars() {
    const CARS_TO_GENERATE = 100;

    for (let i = 0; i < CARS_TO_GENERATE; i++) {
      const name = this.randomizeName();
      const color = this.randomizeColor();
      const promise = setCar(name, color);
      promise.then((res) => {
        if (this.#amountPerPage < CARS_PER_PAGE) {
          this.appendChildren(new CarsItem({ color, name, id: res.id, callback: this.#changePage }));
          this.#amountPerPage++;
        }
      });
    }
    this.#carsAmount += 100;
    this.#title.changeText(`Garage(${this.#carsAmount})`);
    getDomElement('#next-button').removeAttribute('disabled');
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
