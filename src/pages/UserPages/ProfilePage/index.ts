import Block from '../../../core/Block';
import './profilePageModule.scss';
import template from './profilePage.template.hbs?raw';

export class ProfilePage extends Block {
  public static Name = 'ProfilePage';

  constructor() {
    super();
  }

  protected render(): string {
    return template;
  }
}