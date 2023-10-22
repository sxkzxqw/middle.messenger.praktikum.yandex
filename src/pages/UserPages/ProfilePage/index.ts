import './ProfilePageModule.scss';
export { default as ProfilePage } from './profilePage.template.hbs?raw';

window.onload = () => {
  const avatar = document.querySelector('#profile-change-image');
  const changeData = document.querySelector('#profile-change-data');
  const changePassword = document.querySelector('#profile-change-password');
  const closeButton = document.querySelectorAll('.modal__close-button');

  avatar?.addEventListener('click', () => {
    document.querySelector('#changeUserAvatarModal')?.classList.add('modal_opened');
  })
  changeData?.addEventListener('click', () => {
    document.querySelector('#changeUserDataModal')?.classList.add('modal_opened');
  });
  changePassword?.addEventListener('click', () => {
    document.querySelector('#changeUserPasswordModal')?.classList.add('modal_opened');
  });

  closeButton?.forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelector('#changeUserPasswordModal')?.classList.remove('modal_opened');
      document.querySelector('#changeUserDataModal')?.classList.remove('modal_opened');
      document.querySelector('#changeUserAvatarModal')?.classList.remove('modal_opened');
    });
  })
};