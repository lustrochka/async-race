import Component from '../basic-components/component';
import Input from '../basic-components/input';
import Button from '../basic-components/button';
import { Callback } from '../../types';

class Form extends Component {
  constructor(type: string, callback: Callback) {
    super('div', `${type.toLowerCase()}-form`);
    const nameInput = new Input('name-input', { type: 'text', name: 'name' });
    const colorInput = new Input('color-input', { type: 'color', name: 'color' });
    this.appendChildren(
      nameInput,
      colorInput,
      new Button('button', type, { type: 'button' }, () => callback(nameInput.getValue(), colorInput.getValue()))
    );
  }
}

export default Form;
