import Block from '../../../core/Block';
import './profilePageModule.scss';
import template from './profilePage.template.hbs?raw';
import { navigate } from '../../../router/router';
import { RouterPages } from '../../types';
import { ChangeAvatarModal, ChangePasswordModal, ChangeUserDataModal } from '../../../components';

interface IProfilePageProps {

}
export class ProfilePage extends Block {
  public static name = 'ProfilePage';

  constructor(props: IProfilePageProps) {
    super({
      ...props,
      navigateToChats: (e: MouseEvent) => {
        e.preventDefault();
        navigate(RouterPages.CHATS);
      },
      onLogout: (e: MouseEvent) => {
        e.preventDefault();
        navigate(RouterPages.LOGIN);
      },
      onChangeData: (e: MouseEvent) => {
        e.preventDefault();
        const ChangeDataModalComponent = (this.refs.ChangeUserDataModal as ChangeUserDataModal);
        ChangeDataModalComponent.setProps({
          extraClass: 'modal_opened',
        });
      },
      onCloseChangeUserData: (e: MouseEvent) => {
        e.preventDefault();
        const ChangeDataModalComponent = (this.refs.ChangeUserDataModal as ChangeUserDataModal);
        ChangeDataModalComponent.setProps({
          extraClass: '',
        });
      },
      onChangePassword: (e: MouseEvent) => {
        e.preventDefault();
        const ChangePasswordModalComponent = (this.refs.ChangePasswordModal as ChangePasswordModal);
        ChangePasswordModalComponent.setProps({
          extraClass: 'modal_opened',
        });
      },
      onCloseChangePassword: (e: MouseEvent) => {
        e.preventDefault();
        const ChangePasswordModalComponent = (this.refs.ChangePasswordModal as ChangePasswordModal);
        ChangePasswordModalComponent.setProps({
          extraClass: '',
        });
      },
      onChangeAvatar: (e: MouseEvent) => {
        e.preventDefault();
        const ChangeAvatarModalComponent = (this.refs.ChangeAvatarModal as ChangeAvatarModal);
        ChangeAvatarModalComponent.setProps({
          extraClass: 'modal_opened',
        });
      },
      onCloseChangeAvatar: (e: MouseEvent) => {
        e.preventDefault();
        const ChangeAvatarModalComponent = (this.refs.ChangeAvatarModal as ChangeAvatarModal);
        ChangeAvatarModalComponent.setProps({
          extraClass: '',
        });
      },
    });
  }

  protected render(): string {
    return template;
  }
}
