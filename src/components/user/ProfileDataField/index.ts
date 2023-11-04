import Block from '../../../core/Block';
import './profileDataFieldModule.scss';
import template from './profileDataField.template.hbs?raw';

export class ProfileDataField extends Block {
  public static name = 'ProfileDataField';

  constructor(props: any) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}
