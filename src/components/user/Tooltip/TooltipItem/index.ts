import Block from '../../../../core/Block';
import './tooltipItemModule.scss';
import template from './tooltipItem.template.hbs?raw';

interface ITooltipItemProps {

}
export class TooltipItem extends Block {
  public static name = 'TooltipItem';

  constructor(props: ITooltipItemProps) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}