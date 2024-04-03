import App from './components/app/app';
import './style.scss';

document.body.appendChild(new App().getNode());

window.addEventListener('unload', () => localStorage.clear());
