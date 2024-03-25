import Component from '../basic-components/component';
import { getCars } from '../../api/api';
import { GarageResponse } from '../../types';
import { h3 } from '../basic-components/tags';
import CarsItem from './cars-item';

class Cars extends Component {
  title;

  constructor() {
    super('div', 'cars');
    this.title = h3('garage__title', 'Garage');
    this.appendChildren(this.title);
    const promise = getCars(1);
    promise.then((res: GarageResponse) => {
      this.title.changeText(`Garage (${res.amount})`);
      for (let i = 0; i < res.cars.length; i++) {
        this.appendChildren(new CarsItem(res.cars[i].color, res.cars[i].name));
      }
    });
  }
}

export default Cars;
