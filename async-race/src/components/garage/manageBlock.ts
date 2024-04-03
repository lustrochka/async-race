import Component from '../basic-components/component';
import Button from '../basic-components/button';
import CarsItem from './cars-item';
import Form from './form';
import ModalWinner from './modalWinner';
import { getDomElement, getDomElements } from '../../utils/getDomElement';
import { div } from '../basic-components/tags';
import { ManageBlockArgs } from '../../types';
import {
  updateCar,
  getCars,
  startCarEngine,
  drive,
  stopCarEngine,
  createWinner,
  updateWinner,
  getWinner,
} from '../../api/api';

class ManageBlock extends Component {
  #raceBtn;

  #resetBtn;

  #modal;

  changePage;

  #checkPageBtns;

  constructor({ createCar, generateCars, change, checkPageBtns }: ManageBlockArgs) {
    super('div', 'manage-block');
    this.#raceBtn = new Button('button', 'Race', { id: 'race-button' }, () => this.startRace());
    this.#resetBtn = new Button('button', 'Reset', { id: 'reset-button', disabled: 'true' }, () => this.stopRace());
    this.appendChildren(
      new Form('Create', createCar),
      new Form('Update', this.updateCar),
      div('race-buttons', this.#raceBtn, this.#resetBtn),
      new Button('button', 'Generate cars', { id: 'generate-button' }, generateCars)
    );
    this.#modal = new ModalWinner();
    this.changePage = change;
    this.#checkPageBtns = checkPageBtns;
  }

  updateCar(name: string, color: string) {
    const id = localStorage.getItem('selected');
    if (id) {
      const promise = updateCar(Number(id), name, color);
      promise.then(() => {
        const item = getDomElement<HTMLDivElement>(`#item${id}`);
        const newItem = new CarsItem({ color, name, id: Number(id), callback: () => this.changePage() });
        item.replaceWith(newItem.getNode());
        localStorage.removeItem('selected');
        localStorage.removeItem('update-name');
        localStorage.removeItem('update-color');
      });
    }
  }

  async startRace() {
    const page = localStorage.getItem('garage-page') || '1';
    this.#raceBtn.addAttributes({ disabled: 'true' });
    getDomElement('#winners-button').setAttribute('disabled', 'true');
    getDomElement('#prev-button').setAttribute('disabled', 'true');
    getDomElement('#next-button').setAttribute('disabled', 'true');
    const startButtons = getDomElements('.start-button');
    startButtons.forEach((button) => button.setAttribute('disabled', 'true'));

    const stopButtons = getDomElements('.stop-button');
    stopButtons.forEach((button) => button.removeAttribute('disabled'));

    const allCarsResponse = await getCars(Number(page));
    const idArray = allCarsResponse.cars.map((el) => el.id);
    const distance =
      getDomElement('.cars-item__flag').getBoundingClientRect().x -
      getDomElement('.cars-item__car-icon').getBoundingClientRect().x;
    document.documentElement.style.setProperty('--my-distance', `${distance}px`);
    const startEngineResponse = await Promise.allSettled(idArray.map(async (el) => startCarEngine(el)));

    const garage = getDomElement('.cars');
    garage.onanimationend = (e) => {
      garage.onanimationend = null;
      this.defineWinner(e);
    };

    startEngineResponse.forEach((response) => {
      if (response.status === 'fulfilled') {
        const id = idArray[startEngineResponse.indexOf(response)];
        const time = response.value;
        const carIcon = getDomElement(`#car${id}`);
        carIcon.style.setProperty('animation', `${time}ms linear move forwards`);
        carIcon.addEventListener('animationend', () => {
          stopCarEngine(id);
        });
        drive(id).then((driveResponse) => {
          if (!driveResponse) {
            carIcon.style.setProperty('animation-play-state', 'paused');
          }
        });
      }
    });
  }

  defineWinner(event: Event) {
    const { target } = event;
    if (target instanceof HTMLElement) {
      const time = parseInt(target.style.animationDuration, 10) / 1000;
      const name = target.dataset.name || '';
      const id = Number(target.id.slice(3));
      this.setWinner(id, time);
      this.#modal.show(name, time);
      this.#modal.setListener('click', () => {
        this.#modal.hide();
      });
    }
    this.#resetBtn.deleteAttribute('disabled');
    getDomElement('#winners-button').removeAttribute('disabled');
    getDomElement('#prev-button').removeAttribute('disabled');
    getDomElement('#next-button').removeAttribute('disabled');
    this.#checkPageBtns();
  }

  setWinner(id: number, bestTime: number) {
    getWinner(id).then((response) => {
      const { status } = response;
      if (status) {
        const { data } = response;
        const winsAmount = data.wins + 1;

        if (data.time < bestTime) {
          bestTime = data.time;
        }

        updateWinner({ id, wins: winsAmount, time: bestTime });
      } else {
        const winsAmount = 1;
        createWinner({ id, wins: winsAmount, time: bestTime });
      }
    });
  }

  stopRace() {
    this.#raceBtn.deleteAttribute('disabled');
    this.#resetBtn.addAttributes({ disabled: 'true' });
    const startButtons = getDomElements('.start-button');
    startButtons.forEach((button) => button.removeAttribute('disabled'));

    const stopButtons = getDomElements('.stop-button');
    stopButtons.forEach((button) => button.setAttribute('disabled', 'true'));

    getDomElements('.cars-item__car-icon').forEach((icon) => {
      icon.style.transition = '0ms';
      icon.style.animation = 'none';
    });
  }
}

export default ManageBlock;
