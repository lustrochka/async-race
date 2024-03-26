import Component from '../basic-components/component';
import Input from '../basic-components/input';
import Button from '../basic-components/button';
import CarsItem from './cars-item';
import getDomElement from '../../utils/getDomElement';
import { div } from '../basic-components/tags';
import { Callback } from '../../types';
import { updateCar } from '../../api/api';

class ManageBlock extends Component {
  constructor(createCar: Callback, generateCars: () => void) {
    super('div', 'manage-block');
    this.appendChildren(
      this.renderForm('Create', createCar),
      this.renderForm('Update', this.updateCar),
      new Button('generate-button', 'Generate cars', {}, generateCars)
    );
  }

  renderForm(type: string, callback: Callback) {
    const form = div(`${type.toLowerCase()}-form`);
    const nameInput = new Input('name-input', { type: 'text', name: 'name' });
    const colorInput = new Input('color-input', { type: 'color', name: 'color' });
    form.appendChildren(
      nameInput,
      colorInput,
      new Button('button', type, { type: 'button' }, () => callback(nameInput.getValue(), colorInput.getValue()))
    );
    return form;
  }

  updateCar(name: string, color: string) {
    const id = localStorage.getItem('selected');
    if (id) {
      const promise = updateCar(Number(id), name, color);
      promise.then(() => {
        const item = getDomElement<HTMLDivElement>(`#item${id}`);
        const newItem = new CarsItem(color, name, Number(id));
        item.replaceWith(newItem.getNode());
      });
    }
  }
}

export default ManageBlock;
