import './styles/main.scss';
import Handlebars from 'handlebars';
import * as Pages from './pages';
import * as Components from './components';

import addUserIcon from '../public/icons/addUser.svg';
import deleteUserIcon from '../public/icons/addUser.svg';
import arrowLeftIcon from '../public/icons/arrowLeftIcon.svg';
import arrowRightIcon from '../public/icons/arrowRightIcon.svg';
import closeIcon from '../public/icons/close-svgrepo-com.svg';
import defaultAvatarIcon from '../public/icons/defaultAvatar.svg';
import moreIcon from '../public/icons/moreIcon.svg';
import profileRightIcon from '../public/icons/profileRight.svg';
import readedIcon from '../public/icons/readedIcon.svg';
import searchIcon from '../public/icons/searchIcon.svg';
import attachIcon from '../public/icons/attachGroupIcons/attachIcon.svg';
import fileIcon from '../public/icons/attachGroupIcons/fileIcon.svg';
import locationIcon from '../public/icons/attachGroupIcons/locationIcon.svg';
import photoIcon from '../public/icons/attachGroupIcons/photoIcon.svg';

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
}


Object.entries(Components).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component);
})

Handlebars.registerHelper('global', function (key) {
  return imagesContext[key];
});

interface IRoute {
  path: string;
  component: string;
  context?: {
    [key: string]: string;
  };
};

const routes: IRoute[] = [
  {
    path: '/login',
    component: Pages.LoginPage,
  },
  {
    path: '/register',
    component: Pages.RegisterPage
  },
  {
    path: '/profile',
    component: Pages.ProfilePage
  },
  {
    path: '/chats',
    component: Pages.MainPage
  },
  {
    path: '/500error',
    component: Pages.ErrorPage,
    context: {
      code: '500',
      message: 'Мы уже фиксим',
    }
  },
  {
    path: '/404error',
    component: Pages.ErrorPage,
    context: {
      code: '404',
      message: 'Не туда попали',
    }
  }
];

const router = (path: string) => {
  const root = document.querySelector('#root');
  // временная мера для отображения модалок
  switch (path) {
    case '/profile': {
      setTimeout(() => {
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
      }, 200);
      break;
    }
    case '/chats': {
      setTimeout(() => {
        const addUser = document.querySelector('#tooltip-add-user');
        const deleteUser = document.querySelector('#tooltip-delete-user');
        const closeButton = document.querySelectorAll('.modal__close-button');

        addUser?.addEventListener('click', () => {
          document.querySelector('#addUserModal')?.classList.add('modal_opened');
        })
        deleteUser?.addEventListener('click', () => {
          document.querySelector('#deleteUserModal')?.classList.add('modal_opened');
        });

        closeButton?.forEach((button) => {
          button.addEventListener('click', () => {
            document.querySelector('#addUserModal')?.classList.remove('modal_opened');
            document.querySelector('#deleteUserModal')?.classList.remove('modal_opened');
          });
        })
      }, 200);
      break;
    }
  }

  if (root) {
    const pageItem = routes.find(route => route.path === path);
    window.history.pushState({}, '', path)
    if (pageItem) {
      root.innerHTML = Handlebars.compile(pageItem.component)(pageItem.context);
    }
  }
}

document.addEventListener('click', (e: MouseEvent) => {
  if (!e.target) return;

  const routePath = (e.target as HTMLElement).getAttribute('to');
  if (!routePath) return;

  router(routePath);

  e.preventDefault();
});

window.onload = () => {
  router('/chats')
}
