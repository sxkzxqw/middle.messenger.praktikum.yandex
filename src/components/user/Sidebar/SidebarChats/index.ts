import Block from '../../../../core/Block';
import './sidebarChatsModule.scss';
import template from './sidebarChats.template.hbs?raw';

export class SidebarChats extends Block {
  public static name = 'SidebarChats';

  constructor(props: any) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}