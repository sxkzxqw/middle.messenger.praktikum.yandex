import Block from '../../../../core/Block';
import './changeAvatarModalModule.scss';
import template from './changeAvatarModal.template.hbs?raw';

interface IChangeAvatarModalProps {
  onClose?: () => void;
}

export class ChangeAvatarModal extends Block {
  public static name = 'ChangeAvatarModal';

  constructor(props: IChangeAvatarModalProps) {
    super({
      ...props,
      closeModal: props.onClose,
    });
  }

  protected render(): string {
    return template;
  }
}
