import './loginPageModule.scss';
import Block from '../../../core/Block';
import template from './loginPage.template.hbs?raw';

export class LoginPage extends Block {
  constructor() {
    super();
  }

  protected render(): string {
    return template;
  }
}
