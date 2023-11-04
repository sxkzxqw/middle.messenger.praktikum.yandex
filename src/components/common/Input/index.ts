import Block from '../../../core/Block';
import './inputModule.scss';
import template from './input.template.hbs?raw';

export class Input extends Block {
  public static name = 'Input';

  constructor(props: any) {
    super({
      ...props,
    })
  }

  protected render(): string {
    return template;
  }
}
