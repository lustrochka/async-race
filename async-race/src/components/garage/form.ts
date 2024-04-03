import Component from '../basic-components/component';
import Input from '../basic-components/input';
import Button from '../basic-components/button';
import CarIcon from './carIcon';
import { getDomElement } from '../../utils/getDomElement';
import { Callback } from '../../types';

class Form extends Component {
  constructor(type: string, callback: Callback) {
    super('div', `${type.toLowerCase()}-form`);
    const name = localStorage.getItem(`${type.toLowerCase()}-name`) || '';
    const color = localStorage.getItem(`${type.toLowerCase()}-color`) || '#000000';
    const nameInput = new Input('name-input', { type: 'text', name: 'name', value: name });
    const colorInput = new Input('color-input', { type: 'color', name: 'color', value: color });
    const button = new Button('button', type, { type: 'button' }, () =>
      callback(nameInput.getValue(), colorInput.getValue())
    );
    button.setListener('click', () => {
      nameInput.getNode().value = '';
      colorInput.getNode().value = '#000000';
    });
    nameInput.setListener('input', () => {
      localStorage.setItem(`${type.toLowerCase()}-name`, `${nameInput.getValue()}`);
    });
    colorInput.setListener('input', () => {
      localStorage.setItem(`${type.toLowerCase()}-color`, `${colorInput.getValue()}`);
      if (type === 'Update' && localStorage.getItem('selected')) {
        const id = localStorage.getItem('selected');
        const oldIcon = getDomElement(`#car${id}`);
        const oldName = oldIcon.dataset.name;
        const newIcon = new CarIcon(colorInput.getValue());
        newIcon.addAttributes({ id: `car${id}`, 'data-name': `${oldName}` });
        oldIcon.replaceWith(newIcon.getNode());
      }
    });
    this.appendChildren(nameInput, colorInput, button);
  }
}

export default Form;
