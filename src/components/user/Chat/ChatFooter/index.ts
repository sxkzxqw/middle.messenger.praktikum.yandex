import './chatFooterModule.scss';
import template from './chatFooter.template.hbs?raw';
import Block from '../../../../core/Block';

interface IChatFooterProps {

}
export class ChatFooter extends Block {
  public static name = 'ChatFooter';

  constructor(props: IChatFooterProps) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}