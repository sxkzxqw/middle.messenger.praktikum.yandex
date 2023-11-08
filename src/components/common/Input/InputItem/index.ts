import Block from "../../../../core/Block";
import template from './inputItem.template.hbs?raw';

interface IInputItemProps {
  name?: string;
  type?: string;
  extraClass?: string;
  placeholder?: string;
  onBlur?: () => void;
  onChange?: () => void;
}

export class InputItem extends Block {
  public static name = 'InputItem';

  constructor(props: IInputItemProps) {
    super({
      ...props,
      events: {
        blur: props.onBlur || (() => { }),
        change: props.onChange || (() => { }),
      }
    });
  }

  protected render(): string {
    return template;
  }
}
