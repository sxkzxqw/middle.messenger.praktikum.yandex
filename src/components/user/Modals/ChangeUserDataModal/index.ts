import Block from '../../../../core/Block';
import './changeUserDataModalModule.scss';
import template from './changeUserDataModal.template.hbs?raw';

export class ChangeUserDataModal extends Block {
  public static name = 'ChangeUserDataModal';

  constructor(props: any) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}
