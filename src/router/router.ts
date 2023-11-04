import * as Pages from '../pages';
import { RouterPages } from '../pages/types';

interface PageItem {
  name: string;
  page: any;
}

const pages: PageItem[] = [
  { name: RouterPages.LOGIN, page: Pages.LoginPage },
  { name: RouterPages.REGISTER, page: Pages.RegisterPage },
  { name: RouterPages.ERROR_404, page: Pages.ErrorPage },
  { name: RouterPages.ERROR_500, page: Pages.ErrorPage },
  { name: RouterPages.CHATS, page: Pages.MainPage },
  { name: RouterPages.PROFILE, page: Pages.ProfilePage },
];

/**
 * Функция навигации
 */
export const navigate = (page: string) => {
  const root = document.getElementById('root');
  if (root) {
    const Component = pages.find(p => p.name === page)?.page;
    if (!Component) return;
    let context: any = null;
    switch (page) {
      case RouterPages.ERROR_404:
        context = {
          code: '404',
          message: 'Упс. Данной страницы не существует'
        };
        break;

      case RouterPages.ERROR_500:
        context = {
          code: '500',
          message: 'Что-то пошло не так. Разбираемся.'
        };
        break;
    }
    const comp = context ? new Component(context) : new Component();
    root.innerHTML = '';
    root.append(comp.getElement()!);
  }
};
