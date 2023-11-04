import Block from '../../../../core/Block';
import './usersTooltipModule.scss';
import template from './usersTooltip.template.hbs?raw';

export class UsersTooltip extends Block {
  public static name = 'UsersTooltip';

  constructor(props: any) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}
