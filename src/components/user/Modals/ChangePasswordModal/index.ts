import Block from '../../../../core/Block';
import './changePasswordModalModule.scss';
import template from './changePasswordModal.template.hbs?raw';

export class ChangePasswordModal extends Block {
  public static name = 'ChangePasswordModal';

  constructor(props: any) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}
