import Component from '../basic-components/component';
import { div } from '../basic-components/tags';
import { getWinners } from '../../api/api';
import Button from '../basic-components/button';
import WinnersTable from './winnersTable';

const WINNERS_PER_PAGE = 10;

class Winners extends Component {
  #page;

  #title;

  #winnersAmount;

  #winnersTable;

  #prevButton;

  #nextButton;

  constructor() {
    super('div', 'winners');
    this.#page = 1;
    this.#winnersAmount = 0;
    this.#title = div('winners__title');
    this.#winnersTable = new WinnersTable();
    this.#prevButton = new Button('page-button', 'Prev', { id: 'prev-button', disabled: 'true' }, () => {
      this.#page--;
      this.changePage();
    });
    this.#nextButton = new Button('page-button', 'Next', { id: 'next-button' }, () => {
      this.#page++;
      this.changePage();
    });
    this.appendChildren(this.#winnersTable, div('page-buttons', this.#prevButton, this.#nextButton));
    this.getResponse();
  }

  async getResponse() {
    const winnersResponse = await getWinners(this.#page);
    this.#winnersAmount = Number(winnersResponse.amount);
    this.#title.changeText(`Winners(${this.#winnersAmount})`);
    this.#winnersTable.render(winnersResponse.winners);
    this.disableNextBtn();
  }

  changePage() {
    this.#prevButton.deleteAttribute('disabled');
    if (this.#page === 1) this.#prevButton.addAttributes({ disabled: 'true' });
    this.getResponse();
  }

  disableNextBtn() {
    if (this.#page === Math.ceil(this.#winnersAmount / WINNERS_PER_PAGE)) {
      this.#nextButton.addAttributes({ disabled: 'true' });
    } else {
      this.#nextButton.deleteAttribute('disabled');
    }
  }
}

export default Winners;
