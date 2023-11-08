import { Partial } from '../../../types/BlockTypes';
import template from './tooltip.template.hbs?raw';
import './tooltipModule.scss';
export { TooltipItem } from './TooltipItem';
export class Tooltip extends Partial {
  protected name = 'Tooltip';
  protected template = template;
}
