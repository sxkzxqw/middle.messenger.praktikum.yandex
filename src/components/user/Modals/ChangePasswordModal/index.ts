import Block from '../../../../core/Block';
import './changePasswordModalModule.scss';
import template from './changePasswordModal.template.hbs?raw';

interface IChangePasswordModalProps {
  onClose?: () => void;
}
export class ChangePasswordModal extends Block {
  public static name = 'ChangePasswordModal';

  constructor(props: IChangePasswordModalProps) {
    super({
      ...props,
      closeModal: props.onClose,
    });
  }

  protected render(): string {
    return template;
  }
}
