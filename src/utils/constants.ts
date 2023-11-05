import * as Components from '../components';
import { TRegisterComponent } from '../types/BlockTypes';

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