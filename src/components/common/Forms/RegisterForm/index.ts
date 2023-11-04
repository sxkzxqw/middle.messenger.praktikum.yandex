import './registerFormModule.scss';
import template from './registerForm.template.hbs?raw';
import Block from '../../../../core/Block';

export class RegisterForm extends Block {
  public static name = 'RegisterForm';
  constructor(props: any) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}
