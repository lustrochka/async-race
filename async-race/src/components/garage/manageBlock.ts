import Component from '../basic-components/component';
import GarageForm from './garage-form';

class ManageBlock extends Component {
  constructor() {
    super('div', 'manage-block', new GarageForm('Create'), new GarageForm('Update'));
  }
}

export default ManageBlock;
