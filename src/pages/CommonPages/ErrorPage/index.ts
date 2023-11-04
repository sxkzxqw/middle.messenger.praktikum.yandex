import Block from '../../../core/Block';
import './errorPageModule.scss';
import template from './errorPage.template.hbs?raw';
export class ErrorPage extends Block {
  public static Name = 'ErrorPage';

  constructor(props: any) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}
