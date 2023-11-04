import Block from '../../../../core/Block';
import './sidebarChatModule.scss';
import template from './sidebarChat.template.hbs?raw';

export class SidebarChat extends Block {
  public static name = 'SidebarChat';

  constructor(props: any) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}