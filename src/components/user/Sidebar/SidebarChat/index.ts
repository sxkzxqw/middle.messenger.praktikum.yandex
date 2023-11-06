import Block from '../../../../core/Block';
import './sidebarChatModule.scss';
import template from './sidebarChat.template.hbs?raw';

interface ISidebarChatProps {

}
export class SidebarChat extends Block {
  public static name = 'SidebarChat';

  constructor(props: ISidebarChatProps) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}