import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';
import './styles/main.scss';

export interface IPage {
  path: string;
  component: string;
  context?: {
    [key: string]: string;
  };
};

const pages: IPage[] = [
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

Object.entries(Components).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component);
})

const navigate = (path: string) => {
  const root = document.querySelector('#root');
  if (root) {
    const pageItem = pages.find(page => page.path === path);

    if (pageItem) {
      root.innerHTML = Handlebars.compile(pageItem.component)(pageItem.context);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => navigate('/register'));
document.addEventListener('click', (e: MouseEvent) => {
  if (!e.target) return;

  const pagePath = (e.target as HTMLElement).getAttribute('to');
  if (!pagePath) return;

  navigate(pagePath);

  e.preventDefault();
});
