import Partial from '../../../utils/PartialComonent';
import template from './modal.template.hbs?raw';
import './modalModule.scss';
export class Modal extends Partial {
  protected name = 'Modal';
  protected template = template;
}
