declare module '*.hbs?raw' {
  const tpl: (param?: any) => any
  export default tpl
}

declare module '*.hbs' {
  const tpl: (param?: any) => any
  export default tpl
}