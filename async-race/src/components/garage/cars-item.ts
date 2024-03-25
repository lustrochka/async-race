import Component from '../basic-components/component';
import { div, span } from '../basic-components/tags';
import Button from '../basic-components/button';

class CarsItem extends Component {
  constructor(color: string, name: string) {
    super(
      'div',
      'garage__item',
      span('cars-item__title', `${name}`),
      div('', new Button('start-button', 'A', {}), new Button('stop-button', 'B', {}))
    );
    this.appendChildren(this.createIcon(color));
  }

  createIcon(color: string) {
    const svg = div('garage__icon');
    svg.getNode().innerHTML = `<svg class="svg" width="116" height="40" viewBox="0 0 580 200"
    xmlns="http://www.w3.org/2000/svg" version="1.1"><g id="car-dodger" transform="scale(1.0)">
    <rect x="70" y="10" width="220" height="130" fill="transparent" rx="150" stroke=${color} stroke-width="15" />
    <rect x="10" y="70" width="340" height="80" fill=${color} rx="30" /><g>
    <line x1="145" y1="10" x2="145" y2="80" stroke=${color} stroke-width="15"/>
    <line x1="215" y1="10" x2="215" y2="80" stroke=${color} stroke-width="15"/></g><g>
    <rect x="0" y="110" width="40" height="20" fill="#999" rx="10" />
    <rect x="325" y="110" width="40" height="20" fill="#999" rx="10" /></g><g>
    <circle r="40px" fill="#222" stroke="white" stroke-width="7" cx="90" cy="140"/>    
    <circle r="15px" fill="#555" cx="90" cy="140"/></g><g>
    <circle r="40px" fill="#222" stroke="white" stroke-width="7" cx="270" cy="140"/>
    <circle r="15px" fill="#555" cx="270" cy="140"/></g><g>
    <circle r="15px" fill="gold" cx="340" cy="90"/><circle r="10px" fill="white" cx="15" cy="90"/></g></g></svg>`;
    return svg;
  }
}

export default CarsItem;
