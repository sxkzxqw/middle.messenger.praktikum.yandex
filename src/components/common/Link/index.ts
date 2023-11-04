import Block from '../../../core/Block';
import './linkModule.scss';
import template from './link.template.hbs?raw';

export class Link extends Block {
  public static name = 'Link';

  constructor(props: any) {
    super({
      ...props,
    })
  }

  protected render(): string {
    return template;
  }
}
