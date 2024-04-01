import Component from '../basic-components/component';
import { getCar } from '../../api/api';
import CarIcon from '../garage/carIcon';
import { WinnerData } from '../../types';
import { span } from '../basic-components/tags';

class WinnerItem extends Component {
  constructor(data: WinnerData, num: number) {
    super('div', 'winners__table__item', span('item-number', `${num}`));
    const { carIcon, itemName } = this.render(data.id);
    this.appendChildren(carIcon, itemName, span('item-wins', `${data.wins}`), span('', `${data.time}`));
  }

  render(id: number) {
    const carIcon = span('', '');
    const itemName = span('item-name', '');
    getCar(id).then((response) => {
      carIcon.appendChildren(new CarIcon(response.color));
      itemName.changeText(response.name);
    });
    return { carIcon, itemName };
  }
}

export default WinnerItem;
