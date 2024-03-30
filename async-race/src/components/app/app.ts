import Component from '../basic-components/component';
import Garage from '../garage/garage';
import Winners from '../winners/winners';
import Button from '../basic-components/button';
import { div } from '../basic-components/tags';

class App extends Component {
  #main;

  #garageButton;

  #winnersButton;

  constructor() {
    super('div', 'app');
    this.#garageButton = new Button('button', 'Garage', { id: 'garage-button', disabled: 'true' }, () =>
      this.renderGarage()
    );
    this.#winnersButton = new Button('button', 'Winners', { id: 'winners-button' }, () => this.renderWinners());
    this.#main = new Component('main', 'main', new Garage());
    this.appendChildren(div('buttons', this.#garageButton, this.#winnersButton), this.#main);
  }

  renderGarage() {
    this.#garageButton.addAttributes({ disabled: 'true' });
    this.#winnersButton.deleteAttribute('disabled');
    this.#main.clear();
    this.#main.appendChildren(new Garage());
  }

  renderWinners() {
    this.#winnersButton.addAttributes({ disabled: 'true' });
    this.#garageButton.deleteAttribute('disabled');
    this.#main.clear();
    this.#main.appendChildren(new Winners());
  }
}

export default App;
