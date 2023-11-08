import Block from '../../../../core/Block';
import './sidebarHeadModule.scss';
import template from './sidebarHead.template.hbs?raw';

interface ISidebarHeadingProps {

}
export class SidebarHeading extends Block {
  public static name = 'SidebarHeading';

  constructor(props: ISidebarHeadingProps) {
    super(props);
    this.props.events = {
      click: this.props.onClick || (() => { })
    };
  }

  protected render(): string {
    return template;
  }
}
