import Block from '../../../core/Block';
import './linkModule.scss';
import template from './link.template.hbs?raw';

interface ILinkProps {
  extraClass?: string;
  to?: string;
  text: string;
  id?: string;
}
export class Link extends Block {
  public static name = 'Link';

  constructor(props: ILinkProps) {
    super(props);
    this.props.events = {
      click: this.props.onClick || (() => { })
    };
  }

  protected render(): string {
    return template;
  }
}
