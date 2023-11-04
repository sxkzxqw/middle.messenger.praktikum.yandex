import './mainPageModule.scss';
import template from './mainPage.template.hbs?raw';
import Block from '../../../core/Block';

export class MainPage extends Block {
  public static Name = 'MainPage';

  constructor() {
    super();
  }

  protected render(): string {
    return template;
  }
}
