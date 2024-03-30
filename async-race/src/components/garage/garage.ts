import Component from '../basic-components/component';
import ManageBlock from './manageBlock';
import Cars from './cars';
import Button from '../basic-components/button';
import { div } from '../basic-components/tags';

class Garage extends Component {
  #carsBlock;

  #prevButton;

  #nextButton;

  #page;

  constructor() {
    super('div', 'garage');
    this.#page = Number(localStorage.getItem('garage-page') || 1);
    this.#carsBlock = new Cars(this.#page, () => this.changePage());
    this.#prevButton = new Button('page-button', 'Prev', { id: 'prev-button' }, () => {
      this.#page--;
      this.changePage();
    });
    this.#nextButton = new Button('page-button', 'Next', { id: 'next-button' }, () => {
      this.#page++;
      this.changePage();
    });
    this.appendChildren(
      new ManageBlock(
        (color: string, name: string) => this.#carsBlock.createCar(color, name),
        () => this.#carsBlock.generateCars(),
        () => this.changePage()
      ),
      this.#carsBlock,
      div('page-buttons', this.#prevButton, this.#nextButton)
    );
    this.disableNextBtn();
  }

  changePage() {
    localStorage.setItem('garage-page', `${this.#page}`);
    this.#prevButton.deleteAttribute('disabled');
    this.disableNextBtn();
    const newCarsBlock = new Cars(this.#page, () => this.changePage());
    this.#carsBlock.getNode().replaceWith(newCarsBlock.getNode());
    this.#carsBlock = newCarsBlock;
  }

  disableNextBtn() {
    if (this.#page === 1) this.#prevButton.addAttributes({ disabled: 'true' });
    if (this.#page === Math.ceil(this.#carsBlock.getAmount() / 7)) {
      this.#nextButton.addAttributes({ disabled: 'true' });
    } else {
      this.#nextButton.deleteAttribute('disabled');
    }
  }
}

export default Garage;
