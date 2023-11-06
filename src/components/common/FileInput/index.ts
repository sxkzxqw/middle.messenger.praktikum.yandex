import Block from '../../../core/Block';
import './fileInputModule.scss';
import template from './fileInput.template.hbs?raw';

interface IFileInputProps {

}
export class FileInput extends Block {
  public static name = 'FileInput';

  constructor(props: IFileInputProps) {
    super({
      ...props,
    });
  }

  protected render(): string {
    return template;
  }
}
