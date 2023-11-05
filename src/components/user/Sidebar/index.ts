import Block from '../../../core/Block';
import './sidebarModule.scss';
import template from './sidebar.template.hbs?raw';
import { navigate } from '../../../router/router';
import { RouterPages } from '../../../pages/types';

interface ISidebarProps {

}
export class Sidebar extends Block {
  public static name = 'Sidebar';

  constructor(props: ISidebarProps) {
    super({
      ...props,
      navigateToProfile: (e: MouseEvent) => {
        e.preventDefault();
        navigate(RouterPages.PROFILE);
      }
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
