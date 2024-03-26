import Component from '../basic-components/component';
import Input from '../basic-components/input';
import Button from '../basic-components/button';
import { div } from '../basic-components/tags';
import { Callback } from '../../types';

class ManageBlock extends Component {
  constructor(callback: Callback) {
    super('div', 'manage-block');
    this.appendChildren(this.renderForm('Create', callback), this.renderForm('Update', this.updateCar));
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
    console.log(name, color);
  }
}

export default ManageBlock;
