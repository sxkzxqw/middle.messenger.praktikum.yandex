import Block from '../../../core/Block';
import './messageModule.scss';
import template from './message.template.hbs?raw';

export class Message extends Block {
  public static name = 'Message';

  constructor(props: any) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}