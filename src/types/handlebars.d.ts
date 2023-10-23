declare module "handlebars" {
  export function compile(template: any): (context: any) => any;
}