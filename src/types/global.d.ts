declare module "*.hbs" {
  const _: string;
  export default _;
};

declare module "*.hbs?raw" {
  const _: string;
  export default _;
};

declare module "handlebars" {
  export function compile(template: string): (context: { [key: string]: string; } | undefined) => string;
}
