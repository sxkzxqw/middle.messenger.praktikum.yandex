import './backToChatsModule.scss';
import template from './backToChats.template.hbs?raw';
import Block from '../../../core/Block';

export class BackToChats extends Block {
  public static name = 'BackToChats';

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
