declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Comando personalizado para verificar uma mensagem de erro visível.
     * @param message - Mensagem que deve estar visível na tela
     */
    checkErrorMessage(message: string): Chainable<Subject>;
  }
}
