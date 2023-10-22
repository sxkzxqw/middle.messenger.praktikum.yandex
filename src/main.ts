import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';
import './styles/main.scss';


Object.entries(Components).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component);
})
interface IPage {
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

const router = (path: string) => {
  const root = document.querySelector('#root');
  if (root) {
    const pageItem = pages.find(page => page.path === path);
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

  const pagePath = (e.target as HTMLElement).getAttribute('to');
  if (!pagePath) return;

  router(pagePath);

  e.preventDefault();
});