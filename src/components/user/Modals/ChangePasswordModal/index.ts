import Block from '../../../../core/Block';
import './changePasswordModalModule.scss';
import template from './changePasswordModal.template.hbs?raw';
import { passwordValidate, requiredValidate, validateForm } from '../../../../utils/validation/validation';
import { Input } from '../../..';

interface IChangePasswordModalProps {
  onClose?: () => void;
}

interface FieldsValues {
  old_password?: boolean | string;
  new_password?: boolean | string;
  new_password_again?: boolean | string;
}
export class ChangePasswordModal extends Block {
  public static name = 'ChangePasswordModal';

  constructor(props: IChangePasswordModalProps) {
    super({
      ...props,
      closeModal: props.onClose,
      validate: {
        old_password: (value?: string) => {
          return requiredValidate(value) || passwordValidate(value);
        },
        new_password: (value?: string) => {
          return requiredValidate(value) || passwordValidate(value);
        },
        new_password_again: (value?: string) => {
          return requiredValidate(value) || passwordValidate(value);
        },
      },
      onApply: (e: MouseEvent) => {
        e.preventDefault();
        if (!this.validate()) {
          return;
        }
        console.log({
          component: ChangePasswordModal.name,
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
      old_password: (this.refs.old_password as Input)?.value(),
      new_password: (this.refs.new_password as Input)?.value(),
      new_password_again: (this.refs.new_password_again as Input)?.value()
    };
  }

  protected render(): string {
    return template;
  }
}
