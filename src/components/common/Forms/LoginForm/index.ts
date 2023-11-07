import Block from '../../../../core/Block';
import './loginFormModule.scss';
import template from './loginForm.template.hbs?raw';
import { navigate } from '../../../../router/router';
import { requiredValidate, validateForm } from '../../../../utils/validation/validation';
import { RouterPages } from '../../../../pages/types';
import { Input } from '../..';

interface ILoginFormProps {
  onLogin: (e: MouseEvent) => void;
  onRegister: (e: MouseEvent) => void;
  validate: {
    login: (value?: string) => boolean;
    password: (value?: string) => boolean;
  }
}

interface FieldsValues {
  login?: boolean | string;
  password?: boolean | string;
}

export class LoginForm extends Block {
  public static name = 'LoginForm';
  constructor(props: ILoginFormProps) {
    super({
      ...props,
      validate: {
        login: (value?: string) => {
          return requiredValidate(value);
        },
        password: (value?: string) => {
          return requiredValidate(value);
        }
      },
      onLogin: (e: MouseEvent) => {
        e.preventDefault();
        if (!this.validate()) {
          return;
        }
        console.log({
          ...this.getFieldsValues()
        });
        navigate(RouterPages.CHATS);
      },
      onRegister: (e: MouseEvent) => {
        e.preventDefault();
        navigate(RouterPages.REGISTER);
      }
    });

  }

  private validate(): boolean {
    return validateForm(this.getFieldsValues());
  }

  private getFieldsValues(): FieldsValues {
    return {
      login: (this.refs.login as Input)?.value(),
      password: (this.refs.password as Input)?.value()
    };
  }

  protected render(): string {
    return template;
  }
}
