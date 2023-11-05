import Block from '../../../../core/Block';
import './changeUserDataModalModule.scss';
import template from './changeUserDataModal.template.hbs?raw';

interface IChangeUserDataModalProps {
  onClose?: () => void;
}
export class ChangeUserDataModal extends Block {
  public static name = 'ChangeUserDataModal';

  constructor(props: IChangeUserDataModalProps) {
    super({
      ...props,
      closeModal: props.onClose,
    });
  }

  protected render(): string {
    return template;
  }
}
