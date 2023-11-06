import './styles/main.scss';
import Handlebars from 'handlebars';
import { navigate } from './router/router';
import { RouterPages } from './pages/types';
import { registerComponent, registerPartial } from './utils/ComponentUtils';
import {
  ChatComponentsArray,
  CommonComponentsArray,
  FormsComponentsArray,
  InputComponentsArray,
  ModalComponentsArray,
  SidebarComponentsArray,
  TooltipComponentsArray,
  imagesArray,
  partialComponents
} from './utils/constants';
import { TRegisterComponent } from './types/BlockTypes';

Handlebars.registerHelper('global', function (key) {
  return imagesArray[key];
});

partialComponents.forEach((component) => {
  registerPartial(component);
});

const componentsArray: TRegisterComponent[] = CommonComponentsArray.concat(
  FormsComponentsArray,
  ChatComponentsArray,
  ModalComponentsArray,
  TooltipComponentsArray,
  SidebarComponentsArray,
  InputComponentsArray
);

componentsArray.forEach((c) => {
  registerComponent(c.name, c.component);
});

navigate(RouterPages.LOGIN);