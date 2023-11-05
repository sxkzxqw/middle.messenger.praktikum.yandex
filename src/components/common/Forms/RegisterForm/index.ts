import { requiredValidate } from './../../../../utils/validation/validation';
import './registerFormModule.scss';
import template from './registerForm.template.hbs?raw';
import Block from '../../../../core/Block';
import { checkNameValidate, emailValidate, loginValidate, passwordValidate, phoneValidate, validateForm } from '../../../../utils/validation/validation';
import { Input } from '../..';
import { navigate } from '../../../../router/router';
import { RouterPages } from '../../../../pages/types';

interface IRegisterFormProps {
  validate: {
    email: (value?: string) => boolean;
    login: (value?: string) => boolean;
    first_name: (value?: string) => boolean;
    second_name: (value?: string) => boolean;
    phone: (value?: string) => boolean;
    password: (value?: string) => boolean;
    password_again: (value?: string) => boolean;
  }
  onLogin: (e: MouseEvent) => void;
  onRegister: (e: MouseEvent) => void;
}

interface FieldsValues {
  email?: boolean | string;
  login?: boolean | string;
  first_name?: boolean | string;
  second_name?: boolean | string;
  phone?: boolean | string;
  password?: boolean | string;
  password_again?: boolean | string;
}

export class RegisterForm extends Block {
  public static name = 'RegisterForm';
  constructor(props: IRegisterFormProps) {
    super({
      ...props,
      validate: {
        email: (value?: string) => {
          return requiredValidate(value) || emailValidate(value);
        },
        login: (value?: string) => {
          return requiredValidate(value) || loginValidate(value);
        },
        first_name: (value?: string) => {
          return requiredValidate(value) || checkNameValidate(value);
        },
        second_name: (value?: string) => {
          return requiredValidate(value) || checkNameValidate(value);
        },
        phone: (value?: string) => {
          return requiredValidate(value) || phoneValidate(value);
        },
        password: (value?: string) => {
          return requiredValidate(value) || passwordValidate(value);
        },
        password_again: (value?: string) => {
          return requiredValidate(value) || passwordValidate(value);
        },
      },
      onRegister: (e: MouseEvent) => {
        e.preventDefault();
        if (!this.validate()) {
          return;
        }
        console.log({
          component: RegisterForm.name,
          ...this.getFieldsValues()
        });
        navigate(RouterPages.CHATS);
      },
      onLogin: (e: MouseEvent) => {
        e.preventDefault();
        navigate(RouterPages.LOGIN);
      }
    });

  }

  private validate(): boolean {
    return validateForm(this.getFieldsValues());
  }

  private getFieldsValues(): FieldsValues {
    return {
      email: (this.refs.email as Input)?.value(),
      login: (this.refs.login as Input)?.value(),
      first_name: (this.refs.first_name as Input)?.value(),
      second_name: (this.refs.second_name as Input)?.value(),
      phone: (this.refs.phone as Input)?.value(),
      password: (this.refs.password as Input)?.value(),
      password_again: (this.refs.password_again as Input)?.value(),
    };
  }

  protected render(): string {
    return template;
  }
}
