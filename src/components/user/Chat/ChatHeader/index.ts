import Block from '../../../../core/Block';
import './chatHeaderModule.scss';
import template from './chatHeader.template.hbs?raw';

interface IChatHeaderProps {

}
export class ChatHeader extends Block {
  public static name = 'ChatHeader';

  constructor(props: IChatHeaderProps) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}
