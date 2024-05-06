describe('template spec', () => {
  it('Cadastrar usuário com sucesso', () => {
        cy.start();
        cy.inputUser();
        cy.buttonNext();
        cy.inputAdress();
        cy.loginSucesso();

        cy.on("uncaught:exception", (e, runnable) => {
          console.log("error", e);
          console.log("runnable", runnable);
          console.log("error", e.message);
          return false;
          });
  })
})
