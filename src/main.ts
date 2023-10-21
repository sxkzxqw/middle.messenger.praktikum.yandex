import Handlebars from 'handlebars';
import * as Components from './components';

Object.entries(Components).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component);
})

// Выводим результат
const appContainer = document.querySelector('#root');
if (appContainer) {

}