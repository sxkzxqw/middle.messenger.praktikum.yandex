import Block from '../../../core/Block';
import './inputModule.scss';
import template from './input.template.hbs?raw';
import { ErrorText } from '..';

interface IInputProps {
  name: string;
  label?: string;
  onBlur?: () => void;
  placeholder?: string;
  type?: string;
  value?: string;
  validate?: (value?: string) => string;
}

export class Input extends Block {
  public static name = 'Input';

  constructor(props: IInputProps) {
    super({
      ...props,
      onBlur: () => this.validate(),
      onChange: () => this.validate(),
    },
    );
  }

  public value() {
    if (!this.validate()) {
      return false;
    }
    return this.getValue();
  }

  private getValue() {
    if (this.refs.input instanceof Block) {
      return (this.refs.input.getElement() as HTMLInputElement)?.value || '';
    } else {
      return (this.refs.input as HTMLInputElement)?.value || '';
    }
  }

  private validate() {
    const value = this.getValue();
    const props = this.props as IInputProps;
    const error = props.validate ? props.validate(value) : '';
    const errorTextComponent = (this.refs.errorText as ErrorText);
    if (error) {
      errorTextComponent?.setProps({
        error: error
      });
      return false;
    }
    errorTextComponent?.setProps({
      error: ''
    });
    return true;
  }

  protected render(): string {
    return template;
  }
}

export { InputItem } from './InputItem';
