import Block from '../../../core/Block';
import './buttonModule.scss';
import template from './button.template.hbs?raw';

export interface IButtonProps {
  text: string;
  variant?: string;
  extraClass?: string;
  type?: string;
  onClick?: () => void;
}

export class Button extends Block {
  public static name = 'Button';

  constructor(props: IButtonProps) {
    super(props);
    this.props.events = {
      click: this.props.onClick || (() => { })
    };
  }

  protected render(): string {
    return template;
  }
}
