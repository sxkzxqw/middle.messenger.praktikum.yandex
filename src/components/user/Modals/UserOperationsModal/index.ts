import Block from '../../../../core/Block';
import './userOperationsModal.template.hbs';
import template from './userOperationsModal.template.hbs?raw';

export class UserOperationsModal extends Block {
  public static name = 'UserOperationsModal';

  constructor(props: any) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}
