import Component from '../basic-components/component';
import Input from '../basic-components/input';
import Button from '../basic-components/button';

class GarageForm extends Component<HTMLFormElement> {
  constructor(type: string) {
    super(
      'form',
      `${type.toLowerCase()}-form`,
      new Input('name-input', { type: 'text', name: 'name' }),
      new Input('color-input', { type: 'color', name: 'color' }),
      new Button('button', type, { type: 'button' })
    );
  }
}

export default GarageForm;
