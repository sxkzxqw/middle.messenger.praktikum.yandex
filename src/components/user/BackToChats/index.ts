import './backToChatsModule.scss';
import template from './backToChats.template.hbs?raw';
import Block from '../../../core/Block';

interface IBackToChatsProps {

}
export class BackToChats extends Block {
  public static name = 'BackToChats';

  constructor(props: IBackToChatsProps) {
    super(props);
    this.props.events = {
      click: this.props.onClick || (() => { })
    };
  }

  protected render(): string {
    return template;
  }
}
