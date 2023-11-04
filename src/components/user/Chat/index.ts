import Block from '../../../core/Block';
import './chatModule.scss';
import template from './chat.template.hbs?raw';

export class Chat extends Block {
  public static name = 'Chat';

  constructor(props: any) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}


export { ChatHeader } from './ChatHeader';
export { ChatFooter } from './ChatFooter';
export { ChatContent } from './ChatContent';
