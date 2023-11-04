import './avatarModule.scss';
import template from './avatar.template.hbs?raw';
import Block from '../../../core/Block';

export class Avatar extends Block {
  public static name = 'Avatar';

  constructor(props: any) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}
