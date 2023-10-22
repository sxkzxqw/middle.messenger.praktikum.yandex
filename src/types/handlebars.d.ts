declare module "handlebars" {
  export function compile(template: string): (context: { [key: string]: string; } | undefined) => string;
}