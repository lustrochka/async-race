import Component from '../basic-components/component';
import WinnerItem from './winnersItem';
import { div, span } from '../basic-components/tags';
import { WinnerData } from '../../types';

class WinnersTable extends Component {
  #header;

  #winsButton;

  #timeButton;

  #body;

  #data: WinnerData[];

  #sortingValues: { [key: string]: string };

  constructor() {
    super('div', 'winners__table');
    this.#data = [];
    this.#sortingValues = { wins: 'none', time: 'none' };
    this.#winsButton = span('', 'Wins');
    this.#winsButton.setListener('click', () => this.changeSorting('wins'));
    this.#timeButton = span('', 'Best time (seconds)');
    this.#timeButton.setListener('click', () => this.changeSorting('time'));
    this.#header = div(
      'winners__header',
      span('', 'Number'),
      span('', 'Car'),
      span('', 'Name'),
      this.#winsButton,
      this.#timeButton
    );
    this.#body = div('winners__table__items');
    this.appendChildren(this.#header, this.#body);
  }

  render(data: WinnerData[]) {
    this.#data = data;
    this.#body.clear();
    this.renderItems();
  }

  renderItems() {
    for (let i = 0; i < this.#data.length; i++) {
      this.#body.appendChildren(new WinnerItem(this.#data[i], i + 1));
    }
  }

  changeSorting(value: string) {
    const TEXT: { [key: string]: string } = { none: '', ASC: ' ⭡', DSC: ' ⭣' };
    if (value === 'wins') {
      this.#sortingValues.time = 'none';
      this.#sortingValues.wins === 'ASC' ? (this.#sortingValues.wins = 'DSC') : (this.#sortingValues.wins = 'ASC');
    } else {
      this.#sortingValues.wins = 'none';
      this.#sortingValues.time === 'ASC' ? (this.#sortingValues.time = 'DSC') : (this.#sortingValues.time = 'ASC');
    }
    this.#winsButton.changeText(`Wins${TEXT[this.#sortingValues.wins]}`);
    this.#timeButton.changeText(`Best time (seconds)${TEXT[this.#sortingValues.time]}`);
    this.sortingItems(value);
  }

  sortingItems(sortingValue: string) {
    if (this.#sortingValues[sortingValue] === 'ASC') {
      this.#data.sort((a, b) => a[sortingValue] - b[sortingValue]);
    } else {
      this.#data.sort((a, b) => b[sortingValue] - a[sortingValue]);
    }
    this.#body.clear();
    this.renderItems();
  }
}

export default WinnersTable;
