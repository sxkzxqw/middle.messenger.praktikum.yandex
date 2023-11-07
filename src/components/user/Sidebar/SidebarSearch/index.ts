import Block from '../../../../core/Block';
import './sidebarSearchModule.scss';
import template from './sidebarSearch.template.hbs?raw';

interface ISidebarSearchProps {

}
export class SidebarSearch extends Block {
  public static name = 'SidebarSearch';

  constructor(props: ISidebarSearchProps) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}
