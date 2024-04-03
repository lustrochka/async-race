import Component from '../basic-components/component';
import { getDomElement } from '../../utils/getDomElement';
import { p } from '../basic-components/tags';

class ModalWinner extends Component {
  constructor() {
    super('div', 'modal');
  }

  show(name: string, time: number) {
    this.appendChildren(p('modal__text', `${name} went first (${time}s)`));
    getDomElement('.garage').appendChild(this.getNode());
  }

  hide() {
    this.clear();
    this.destroy();
  }
}

export default ModalWinner;
