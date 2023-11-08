import Block from '../../../core/Block';
import template from './errorText.template.hbs?raw';
import './errorTextModule.scss';

export interface IErrorTextProps {
  errorText?: string;
}

export class ErrorText extends Block {
  public static name = 'ErrorText';

  constructor(props: IErrorTextProps) {
    super(props);
  }

  protected render(): string {
    return template;
  }
}
