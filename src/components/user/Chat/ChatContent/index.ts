import './chatContentModule.scss';
import template from './chatContent.template.hbs?raw';
import Block from '../../../../core/Block';

interface IChatContentProps {

}
export class ChatContent extends Block {
  public static name = 'ChatContent';

  constructor(props: IChatContentProps) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}
