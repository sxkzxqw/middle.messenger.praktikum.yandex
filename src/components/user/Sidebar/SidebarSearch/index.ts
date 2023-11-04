import Block from '../../../../core/Block';
import './sidebarSearchModule.scss';
import template from './sidebarSearch.template.hbs?raw';

export class SidebarSearch extends Block {
  public static name = 'SidebarSearch';

  constructor(props: any) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}