import Block from '../../../../core/Block';
import './chatTooltipModule.scss';
import template from './chatTooltip.template.hbs?raw';

interface IChatTooltipProps {

}
export class ChatTooltip extends Block {
  public static name = 'ChatTooltip';

  constructor(props: IChatTooltipProps) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}
