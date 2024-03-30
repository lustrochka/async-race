import Component from '../basic-components/component';
import Input from '../basic-components/input';
import Button from '../basic-components/button';
import { Callback } from '../../types';

class Form extends Component {
  constructor(type: string, callback: Callback) {
    super('div', `${type.toLowerCase()}-form`);
    const name = localStorage.getItem(`${type.toLowerCase()}-name`) || '';
    const color = localStorage.getItem(`${type.toLowerCase()}-color`) || '#000000';
    const nameInput = new Input('name-input', { type: 'text', name: 'name', value: name });
    const colorInput = new Input('color-input', { type: 'color', name: 'color', value: color });
    nameInput.setListener('input', () => {
      localStorage.setItem(`${type.toLowerCase()}-name`, `${nameInput.getValue()}`);
    });
    colorInput.setListener('input', () => {
      localStorage.setItem(`${type.toLowerCase()}-color`, `${colorInput.getValue()}`);
    });
    this.appendChildren(
      nameInput,
      colorInput,
      new Button('button', type, { type: 'button' }, () => callback(nameInput.getValue(), colorInput.getValue()))
    );
  }
}

export default Form;
