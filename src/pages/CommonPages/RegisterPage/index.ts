import Block from '../../../core/Block';
import './registerPageModule.scss';
import template from './registerPage.template.hbs?raw';

interface IRegisterPageProps {

}
export class RegisterPage extends Block {
  public static name = 'RegisterPage';

  constructor(props: IRegisterPageProps) {
    super({
      ...props
    });
  }

  protected render(): string {
    return template;
  }
}
