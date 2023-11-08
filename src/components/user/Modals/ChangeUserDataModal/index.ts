import Block from '../../../../core/Block';
import template from './changeUserDataModal.template.hbs?raw';
import { checkNameValidate, emailValidate, loginValidate, phoneValidate, requiredValidate, validateForm } from '../../../../utils/validation/validation';
import { Input } from '../../..';

interface IChangeUserDataModalProps {
  onClose?: () => void;
  data: Record<string, string>;
}

interface FieldsValues {
  email?: boolean | string;
  login?: boolean | string;
  first_name?: boolean | string;
  second_name?: boolean | string;
  chat_name?: boolean | string;
  phone?: boolean | string;
}
export class ChangeUserDataModal extends Block {
  public static name = 'ChangeUserDataModal';

  constructor(props: IChangeUserDataModalProps) {
    super({
      ...props,
      closeModal: props.onClose,
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
        chat_name: (value?: string) => {
          return requiredValidate(value);
        },
        phone: (value?: string) => {
          return requiredValidate(value) || phoneValidate(value);
        },
      },
      onApply: (e: MouseEvent) => {
        e.preventDefault();
        if (!this.validate()) {
          return;
        }
        console.log({
          ...this.getFieldsValues()
        });
      },
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
      chat_name: (this.refs.chat_name as Input)?.value(),
      phone: (this.refs.phone as Input)?.value(),
    };
  }

  protected render(): string {
    return template;
  }
}
