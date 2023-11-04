import Block from '../../../core/Block';
import './buttonModule.scss';
import template from './button.template.hbs?raw';

export class Button extends Block {
  public static name = 'Button';

  constructor(props: any) {
    super({
      ...props,
    })
  }

  protected render(): string {
    return template;
  }
}
