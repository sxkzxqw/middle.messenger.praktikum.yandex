import Block from '../../../core/Block';
import './profileDataFieldModule.scss';
import template from './profileDataField.template.hbs?raw';

interface IProfileDataField {

}
export class ProfileDataField extends Block {
  public static name = 'ProfileDataField';

  constructor(props: IProfileDataField) {
    super(props);
    this.props.events = {
      click: this.props.onClick || (() => { })
    };
  }

  protected render(): string {
    return template;
  }
}
