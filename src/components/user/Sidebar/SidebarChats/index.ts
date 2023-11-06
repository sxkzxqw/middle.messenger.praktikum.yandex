import Block from '../../../../core/Block';
import './sidebarChatsModule.scss';
import template from './sidebarChats.template.hbs?raw';

interface ISidebarChatsProps {

}
export class SidebarChats extends Block {
  public static name = 'SidebarChats';

  constructor(props: ISidebarChatsProps) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}