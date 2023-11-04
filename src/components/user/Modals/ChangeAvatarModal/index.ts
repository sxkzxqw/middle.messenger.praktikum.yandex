import Block from '../../../../core/Block';
import './changeAvatarModalModule.scss';
import template from './changeAvatarModal.template.hbs?raw';

export class ChangeAvatarModal extends Block {
  public static name = 'ChangeAvatarModal';

  constructor(props: any) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}
