import './styles/main.scss';
import Handlebars from 'handlebars';
import * as Pages from './pages';
import * as Components from './components';


Object.entries(Components).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component);
})

interface IRoute {
  path: string;
  component: any;
  context?: {
    [key: string]: string;
  };
};

const routes: IRoute[] = [
  {
    path: '/login',
    component: Pages.LoginPage
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
  if (path === '/profile') {
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
  }
  if (root) {
    const pageItem = routes.find(route => route.path === path);
    window.history.pushState({}, '', path)
    if (pageItem) {
      root.innerHTML = Handlebars.compile(pageItem.component)(pageItem.context);
    }
  }
}

window.onload = () => {
  router('/chats')
}

document.addEventListener('click', (e: MouseEvent) => {
  if (!e.target) return;

  const routePath = (e.target as HTMLElement).getAttribute('to');
  if (!routePath) return;

  router(routePath);

  e.preventDefault();
});
