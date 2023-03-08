// Utiliza-se "export" para que essa interface fique visível e possa ser utilizada por outras classes.
export interface Pensamento {
  // quando se uso o "?" você indica que a propriedade é opcional
  id?: number
  conteudo: string
  autoria: string
  modelo: string
}
