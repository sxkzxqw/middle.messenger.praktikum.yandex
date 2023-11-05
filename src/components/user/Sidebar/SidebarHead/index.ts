import Block from '../../../../core/Block';
import './sidebarHeadModule.scss';
import template from './sidebarHead.template.hbs?raw';

export class SidebarHeading extends Block {
  public static name = 'SidebarHeading';

  constructor(props: any) {
    super(props);
    this.props.events = {
      click: this.props.onClick || (() => { })
    };
  }

  protected render(): string {
    return template;
  }
}