import Component from '../basic-components/component';
import ManageBlock from './manageBlock';
import Cars from './cars';

class Garage extends Component {
  #carsBlock;

  constructor() {
    super('div', 'garage');
    this.#carsBlock = new Cars();
    this.appendChildren(
      new ManageBlock(
        (color: string, name: string) => this.#carsBlock.createCar(color, name),
        () => this.#carsBlock.generateCars()
      ),
      this.#carsBlock
    );
  }
}

export default Garage;
