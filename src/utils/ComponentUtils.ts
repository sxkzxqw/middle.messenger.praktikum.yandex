import Handlebars, { HelperOptions } from 'handlebars';
import { v4 as uuidv4 } from 'uuid';
import Block from '../core/Block';
import { CompileTemplateResult } from '../types/BlockTypes';
import { Partial } from './PartialComonent';

// регистрация повторно повторяющегося компонента
export const registerPartial = (Component: typeof Partial) => {
  const partialComponent = new Component().Component;
  Handlebars.registerPartial(partialComponent.name, partialComponent.component);
};

// скомпилировать шаблон
export const compileTemplate = (template: string, context: object): CompileTemplateResult => {
  const data = {
    ...context,
    __children: [] as Array<{ component: unknown, embed(node: DocumentFragment): void }>,
    __refs: {} as Record<string, Block | HTMLElement>,
  };

  const preparedHTML = Handlebars.compile(template)(data as any);
  return { preparedHTML, children: data.__children, refs: data.__refs };
};

// регистрация компонента
export function registerComponent(name: string, Component: typeof Block) {
  if (name in Handlebars.helpers) throw `Компонент уже зарегестрирован - ${name}`;

  Handlebars.registerHelper(name, function (this: unknown, { hash, data, fn }: HelperOptions) {

    const component = new Component(hash);
    const dataAttribute = `data-id="${uuidv4()}"`;

    if ('ref' in hash) (data.root.__refs = data.root.__refs || {})[hash.ref] = component;

    (data.root.__children = data.root.__children || []).push({
      component,
      embed(node: DocumentFragment) {
        const placeholder = node.querySelector(`[${dataAttribute}]`);

        if (!placeholder) throw new Error(`Атрибут data-id отсуствует - ${name}`);

        const element = component.getElement();
        element.append(...Array.from(placeholder.childNodes));
        placeholder.replaceWith(element);
      }
    });

    const contents = fn ? fn(this) : '';
    return `<div ${dataAttribute}>${contents}</div>`;
  });
}