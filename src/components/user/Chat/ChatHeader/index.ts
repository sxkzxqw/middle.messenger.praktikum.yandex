import Block from '../../../../core/Block';
import './chatHeaderModule.scss';
import template from './chatHeader.template.hbs?raw';

export class ChatHeader extends Block {
  public static name = 'ChatHeader';

  constructor(props: any) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}