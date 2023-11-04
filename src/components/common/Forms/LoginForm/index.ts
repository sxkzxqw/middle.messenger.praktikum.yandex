import Block from '../../../../core/Block';
import './loginFormModule.scss';
import template from './loginForm.template.hbs?raw';

export class LoginForm extends Block {
  public static name = 'LoginForm';
  constructor(props: any) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}
