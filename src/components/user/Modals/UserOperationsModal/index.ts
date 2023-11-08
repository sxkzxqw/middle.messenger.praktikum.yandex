import Block from '../../../../core/Block';
import './userOperationsModal.template.hbs';
import template from './userOperationsModal.template.hbs?raw';

interface IUserOperationsModal {
  onClose?: () => void;
}
export class UserOperationsModal extends Block {
  public static name = 'UserOperationsModal';

  constructor(props: IUserOperationsModal) {
    super({
      ...props,
      closeModal: props.onClose,
    });
  }

  protected render(): string {
    return template;
  }
}
