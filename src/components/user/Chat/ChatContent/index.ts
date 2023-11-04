import './chatContentModule.scss';
import template from './chatContent.template.hbs?raw';
import Block from '../../../../core/Block';

export class ChatContent extends Block {
  public static name = 'ChatContent';

  constructor(props: any) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}