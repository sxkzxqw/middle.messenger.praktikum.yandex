import Block from '../../../core/Block';
import './registerPageModule.scss';
import template from './registerPage.template.hbs?raw';

export class RegisterPage extends Block {
  constructor() {
    super();
  }

  protected render(): string {
    return template;
  }
}
