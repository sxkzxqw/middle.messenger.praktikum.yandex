import './styles/main.scss';
import Handlebars from 'handlebars';
import * as Components from './components';

import addUserIcon from '/icons/addUser.svg';
import deleteUserIcon from '/icons/addUser.svg';
import arrowLeftIcon from '/icons/arrowLeftIcon.svg';
import arrowRightIcon from '/icons/arrowRightIcon.svg';
import closeIcon from '/icons/close-svgrepo-com.svg';
import defaultAvatarIcon from '/icons/defaultAvatar.svg';
import moreIcon from '/icons/moreIcon.svg';
import profileRightIcon from '/icons/profileRight.svg';
import readedIcon from '/icons/readedIcon.svg';
import searchIcon from '/icons/searchIcon.svg';
import attachIcon from '/icons/attachGroupIcons/attachIcon.svg';
import fileIcon from '/icons/attachGroupIcons/fileIcon.svg';
import locationIcon from '/icons/attachGroupIcons/locationIcon.svg';
import photoIcon from '/icons/attachGroupIcons/photoIcon.svg';
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
  TooltipComponentsArray
} from './utils/constants';
import { TRegisterComponent } from './types/BlockTypes';

const imagesContext: any = {
  addUserIcon,
  deleteUserIcon,
  arrowLeftIcon,
  arrowRightIcon,
  closeIcon,
  defaultAvatarIcon,
  moreIcon,
  profileRightIcon,
  readedIcon,
  searchIcon,
  attachIcon,
  fileIcon,
  locationIcon,
  photoIcon,
};

Handlebars.registerHelper('global', function (key) {
  return imagesContext[key];
});

const partialComponents = [
  Components.Modal,
  Components.Tooltip,
];

partialComponents.forEach((component) => {
  registerPartial(component);
});

const componentsArray: TRegisterComponent[] = CommonComponentsArray.concat(
  FormsComponentsArray, ChatComponentsArray, ModalComponentsArray, TooltipComponentsArray, SidebarComponentsArray, InputComponentsArray
);

componentsArray.forEach((c) => {
  registerComponent(c.name, c.component);
});

navigate(RouterPages.PROFILE);