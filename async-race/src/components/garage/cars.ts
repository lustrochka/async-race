import Component from '../basic-components/component';
import { getCars, setCar } from '../../api/api';
import { GarageResponse, CarResponse } from '../../types';
import { h3 } from '../basic-components/tags';
import CarsItem from './cars-item';

class Cars extends Component {
  title;

  carsAmount;

  constructor() {
    super('div', 'cars');
    this.title = h3('garage__title', 'Garage');
    this.carsAmount = 0;
    this.appendChildren(this.title);
    const promise = getCars(1);
    promise.then((res: GarageResponse) => {
      this.carsAmount = Number(res.amount);
      this.title.changeText(`Garage (${this.carsAmount})`);
      for (let i = 0; i < res.cars.length; i++) {
        this.appendChildren(new CarsItem(res.cars[i].color, res.cars[i].name, i + 1));
      }
    });
  }

  createCar(color: string, name: string) {
    const promise = setCar(name, color);
    promise.then((res: CarResponse) => {
      this.appendChildren(new CarsItem(name, color, res.id));
      this.title.changeText(`Garage (${++this.carsAmount})`);
    });
  }
}

export default Cars;
