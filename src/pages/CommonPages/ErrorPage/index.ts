import Block from '../../../core/Block';
import './errorPageModule.scss';
import template from './errorPage.template.hbs?raw';

interface IErrorPageProps {

}
export class ErrorPage extends Block {
  public static name = 'ErrorPage';

  constructor(props: IErrorPageProps) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}
