import Block from '../../../core/Block';
import './chatModule.scss';
import template from './chat.template.hbs?raw';

interface IChatProps {

}
export class Chat extends Block {
  public static name = 'Chat';

  constructor(props: IChatProps) {
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
