import * as Pages from '../pages';
import { RouterPages } from '../pages/types';

interface PageItem {
  name: string;
  page: typeof Pages.LoginPage | typeof Pages.RegisterPage | typeof Pages.ErrorPage | typeof Pages.ProfilePage | typeof Pages.MainPage;
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
  const root = document.querySelector('#root');
  if (root) {
    const Component = pages.find(p => p.name === page)?.page;
    if (!Component) return;
    let context: unknown = null;
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

      case RouterPages.PROFILE:
        context = {
          data: {
            email: 'IvanIvanov@gmail.com',
            display_name: "IvanIvanov",
            first_name: 'Иван',
            second_name: 'Иванов',
            login: "ivanivanov",
            phone: "89999999999"
          }
        };
    }
    const comp = context ? new Component(context) : new Component({});
    root.innerHTML = '';
    root.append(comp.getElement()!);
  }
};
