import Block from '../../../../core/Block';
import './chatTooltipModule.scss';
import template from './chatTooltip.template.hbs?raw';

export class ChatTooltip extends Block {
  public static name = 'ChatTooltip';

  constructor(props: any) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}
