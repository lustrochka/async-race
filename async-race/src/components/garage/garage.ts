import Component from '../basic-components/component';
import ManageBlock from './manageBlock';
import Cars from './cars';

class Garage extends Component {
  constructor() {
    super('div', 'garage', new ManageBlock(), new Cars());
  }
}

export default Garage;
