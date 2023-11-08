import './loginPageModule.scss';
import Block from '../../../core/Block';
import template from './loginPage.template.hbs?raw';

interface ILoginPageProps {

}
export class LoginPage extends Block {
  public static name = 'LoginPage';

  constructor(props: ILoginPageProps) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}
