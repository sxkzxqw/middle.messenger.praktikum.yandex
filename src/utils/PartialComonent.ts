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