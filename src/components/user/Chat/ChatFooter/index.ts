import './chatFooterModule.scss';
import template from './chatFooter.template.hbs?raw';
import Block from '../../../../core/Block';
import { ChatTooltip } from '../..';

interface IChatFooterProps {

}
export class ChatFooter extends Block {
  public static name = 'ChatFooter';

  constructor(props: IChatFooterProps) {
    super({
      ...props,
      onChatTooltip: (e: MouseEvent) => {
        e.preventDefault();
        const chatTooltipComponent = (this.refs.chat_tooltip as ChatTooltip);
        chatTooltipComponent.setProps({
          extraClass: 'tooltip_opened',
        });
      },
    });
  }

  protected render(): string {
    return template;
  }
}
