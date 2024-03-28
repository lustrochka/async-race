import Component from '../basic-components/component';
import { div, span, img } from '../basic-components/tags';
import Button from '../basic-components/button';
import getDomElement from '../../utils/getDomElement';
import { deleteCar, deleteWinner, startCarEngine, stopCarEngine, drive } from '../../api/api';
import flagSrc from '../../assets/flag.svg';
import CarIcon from './carIcon';

class CarsItem extends Component {
  #id;

  #carIcon;

  #flagIcon;

  #startBtn;

  #stopBtn;

  constructor(color: string, name: string, id: number) {
    super(
      'div',
      'cars__item',
      new Button('button', 'Select', {}, () => {
        getDomElement<HTMLInputElement>('.update-form .name-input').value = name;
        getDomElement<HTMLInputElement>('.update-form .color-input').value = color;
        localStorage.setItem('selected', `${id}`);
      }),
      new Button('button', 'Remove', {}, () => {
        deleteCar(id).then(() => {
          this.destroy();
          deleteWinner(id);
        });
      }),
      span('cars-item__title', `${name}`)
    );
    this.#id = id;
    this.#carIcon = new CarIcon(color);
    this.#flagIcon = img('cars-item__flag', flagSrc, 'flag');
    this.#startBtn = new Button('start-button', 'A', {}, () => this.moveCar());
    this.#stopBtn = new Button('stop-button clicked', 'B', {}, () => this.stopCar());
    this.addAttributes({ id: `item${id}` });
    this.appendChildren(div('', this.#startBtn, this.#stopBtn), this.#carIcon, this.#flagIcon);
  }

  moveCar() {
    if (!this.#startBtn.getNode().classList.contains('clicked')) {
      startCarEngine(this.#id).then((res) => {
        const time = res;
        const distance = this.#flagIcon.getNode().getBoundingClientRect().x - this.#carIcon.getPosition();
        document.documentElement.style.setProperty('--my-distance', `${distance}px`);
        this.#carIcon.setStyle('animation', `${time}ms linear move forwards`);
        this.#carIcon.setListener('animationend', () => {
          stopCarEngine(this.#id);
        });
        this.#startBtn.toggleClass('clicked');
        this.#stopBtn.toggleClass('clicked');
        drive(this.#id).then((response) => {
          if (!response) {
            this.#carIcon.setStyle('animation-play-state', 'paused');
          }
        });
      });
    }
  }

  stopCar() {
    if (!this.#stopBtn.getNode().classList.contains('clicked')) {
      stopCarEngine(this.#id).then(() => {
        this.#carIcon.setStyle('transition', '0ms');
        this.#carIcon.setStyle('animation', 'none');
        this.#startBtn.toggleClass('clicked');
        this.#stopBtn.toggleClass('clicked');
      });
    }
  }
}

export default CarsItem;
