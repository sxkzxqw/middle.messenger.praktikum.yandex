import Block from '../../../core/Block';
import './messageModule.scss';
import template from './message.template.hbs?raw';

interface IMessageProps {

}
export class Message extends Block {
  public static name = 'Message';

  constructor(props: IMessageProps) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}
