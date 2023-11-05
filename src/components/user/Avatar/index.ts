import './avatarModule.scss';
import template from './avatar.template.hbs?raw';
import Block from '../../../core/Block';

interface IAvatarProps {

}
export class Avatar extends Block {
  public static name = 'Avatar';

  constructor(props: IAvatarProps) {
    super(props);
    this.props.events = {
      click: this.props.onClick || (() => { })
    };
  }

  protected render(): string {
    return template;
  }
}
