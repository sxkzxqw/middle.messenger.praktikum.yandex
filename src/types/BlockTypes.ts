import Block from "../core/Block";

export type TListener = (...args: any) => void;

export enum BlockEvents {
  INIT = 'init',
  FLOW_CDM = 'flow:component-did-mount',
  FLOW_CDU = 'flow:component-did-update',
  FLOW_CWUM = 'flow:component-will-unmount',
  FLOW_RENDER = 'flow:render',
};

export type TRegisterComponent = {
  name: string;
  component: typeof Block;
};

export interface CompileTemplateResult {
  preparedHTML: string;
  children: Array<{ component: unknown, embed(node: DocumentFragment): void }>;
  refs: Record<string, Block | HTMLElement>;
}