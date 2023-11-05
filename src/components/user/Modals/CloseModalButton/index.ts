import Block from "../../../../core/Block";
import template from './closeModalButton.template.hbs?raw';

interface ICloseModalButtonProps {

}

export class CloseModalButton extends Block {
  public static name = 'CloseModalButton';

  constructor(props: ICloseModalButtonProps) {
    super(props);
    this.props.events = {
      click: this.props.onClick || (() => { })
    };
  }

  protected render(): string {
    return template;
  }
}
