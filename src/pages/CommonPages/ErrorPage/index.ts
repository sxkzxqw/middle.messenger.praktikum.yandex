import Block from '../../../core/Block';
import './errorPageModule.scss';
import template from './errorPage.template.hbs?raw';
import { navigate } from '../../../router/router';
import { RouterPages } from '../../types';

interface IErrorPageProps {

}
export class ErrorPage extends Block {
  public static name = 'ErrorPage';

  constructor(props: IErrorPageProps) {
    super({
      ...props,
      onBackToChats: (e: MouseEvent) => {
        e.preventDefault();
        navigate(RouterPages.CHATS);
      }
    });
  }

  protected render(): string {
    return template;
  }
}
