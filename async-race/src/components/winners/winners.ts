import Component from '../basic-components/component';
import { div, span } from '../basic-components/tags';
import { getWinners } from '../../api/api';
import WinnerItem from './winnersItem';
import { WinnerData } from '../../types';

class Winners extends Component {
  #page;

  #title;

  #header;

  #winnersAmount;

  #winnersTable;

  #winsButton;

  #timeButton;

  #data: WinnerData[];

  #sortingValues: { [key: string]: string };

  constructor() {
    super('div', 'winners');
    this.#page = 1;
    this.#winnersAmount = 0;
    this.#data = [];
    this.#sortingValues = { wins: 'none', time: 'none' };
    this.#title = div('winners__title');
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
    this.#winnersTable = div('winners__table');
    this.appendChildren(this.#header, this.#winnersTable);
    this.getResponse();
  }

  async getResponse() {
    const winnersResponse = await getWinners(this.#page);
    this.#winnersAmount = Number(winnersResponse.amount);
    this.#title.changeText(`Winners(${this.#winnersAmount})`);
    this.#data = winnersResponse.winners;
    this.renderTable();
  }

  renderTable() {
    for (let i = 0; i < this.#data.length; i++) {
      this.#winnersTable.appendChildren(new WinnerItem(this.#data[i], i + 1));
    }
  }

  changeSorting(value: string) {
    if (value === 'wins') {
      this.#sortingValues.time = 'none';
      this.#sortingValues.wins === 'ASC' ? (this.#sortingValues.wins = 'DSC') : (this.#sortingValues.wins = 'ASC');
    } else {
      this.#sortingValues.wins = 'none';
      this.#sortingValues.time === 'ASC' ? (this.#sortingValues.time = 'DSC') : (this.#sortingValues.time = 'ASC');
    }
    this.sortingTable(value);
  }

  sortingTable(sortingValue: string) {
    console.log(this.#sortingValues[sortingValue]);
    if (this.#sortingValues[sortingValue] === 'ASC') {
      this.#data.sort((a, b) => a[sortingValue] - b[sortingValue]);
    } else {
      this.#data.sort((a, b) => b[sortingValue] - a[sortingValue]);
    }
    this.#winnersTable.clear();
    this.renderTable();
  }
}

export default Winners;
