import * as Components from '../components';
import { TRegisterComponent } from '../types/BlockTypes';
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

export const imagesArray: Record<string, string> = {
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

export const partialComponents = [
  Components.Modal,
  Components.Tooltip,
];

export const SidebarComponentsArray: TRegisterComponent[] = [
  { name: Components.SidebarSearch.name, component: Components.SidebarSearch },
  { name: Components.SidebarChat.name, component: Components.SidebarChat },
  { name: Components.SidebarChats.name, component: Components.SidebarChats },
  { name: Components.SidebarHeading.name, component: Components.SidebarHeading },
  { name: Components.Sidebar.name, component: Components.Sidebar },
];

export const TooltipComponentsArray: TRegisterComponent[] = [
  { name: Components.TooltipItem.name, component: Components.TooltipItem },
  { name: Components.ChatTooltip.name, component: Components.ChatTooltip },
  { name: Components.UsersTooltip.name, component: Components.UsersTooltip },
];

export const ModalComponentsArray: TRegisterComponent[] = [
  { name: Components.ChangeAvatarModal.name, component: Components.ChangeAvatarModal },
  { name: Components.ChangePasswordModal.name, component: Components.ChangePasswordModal },
  { name: Components.ChangeUserDataModal.name, component: Components.ChangeUserDataModal },
  { name: Components.UserOperationsModal.name, component: Components.UserOperationsModal },
  { name: Components.CloseModalButton.name, component: Components.CloseModalButton },
];

export const ChatComponentsArray: TRegisterComponent[] = [
  { name: Components.ChatFooter.name, component: Components.ChatFooter },
  { name: Components.ChatHeader.name, component: Components.ChatHeader },
  { name: Components.ChatContent.name, component: Components.ChatContent },
  { name: Components.Chat.name, component: Components.Chat },
];

export const FormsComponentsArray: TRegisterComponent[] = [
  { name: Components.LoginForm.name, component: Components.LoginForm },
  { name: Components.RegisterForm.name, component: Components.RegisterForm },
];

export const CommonComponentsArray: TRegisterComponent[] = [
  { name: Components.Avatar.name, component: Components.Avatar },
  { name: Components.Button.name, component: Components.Button },
  { name: Components.Link.name, component: Components.Link },
  { name: Components.BackToChats.name, component: Components.BackToChats },
  { name: Components.Message.name, component: Components.Message },
];

export const InputComponentsArray: TRegisterComponent[] = [
  { name: Components.ErrorText.name, component: Components.ErrorText },
  { name: Components.InputItem.name, component: Components.InputItem },
  { name: Components.Input.name, component: Components.Input },
  { name: Components.FileInput.name, component: Components.FileInput },
  { name: Components.ProfileDataField.name, component: Components.ProfileDataField },
];
