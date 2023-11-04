import Block from '../../../core/Block';
import './sidebarModule.scss';
import template from './sidebar.template.hbs?raw';

export class Sidebar extends Block {
  public static name = 'Sidebar';

  constructor(props: any) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}

export { SidebarHeading } from './SidebarHead';
export { SidebarSearch } from './SidebarSearch';
export { SidebarChats } from './SidebarChats';
export { SidebarChat } from './SidebarChat';
