import './mainPageModule.scss';
import template from './mainPage.template.hbs?raw';
import Block from '../../../core/Block';

interface IMainPageProps {

}
export class MainPage extends Block {
  public static name = 'MainPage';

  constructor(props: IMainPageProps) {
    super({ ...props });
  }

  protected render(): string {
    return template;
  }
}
