import Block from "../core/Block";

export type TListener = (...args: any) => void;

export enum BlockEvents {
  INIT = 'init',
  FLOW_CDM = 'flow:component-did-mount',
  FLOW_CDU = 'flow:component-did-update',
  FLOW_CWUM = 'flow:component-will-unmount',
  FLOW_RENDER = 'flow:render',
};

export interface IProps extends Record<string, any> {
  events?: object;
}

export type TRegisterComponent = {
  name: string;
  component: typeof Block;
};

export class Partial {
  protected name = '';
  protected template = '';

  get Component(): PartialComponent {
    return {
      component: this.template,
      name: this.name
    };
  }
}

export interface PartialComponent {
  name: string;
  component: string;
}
