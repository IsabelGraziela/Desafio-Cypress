it('Cadastrar usuário com cpf repetido', () => {
    cy.start();
    cy.inputUser(); 
    cy.buttonNext();
    cy.inputAdress();
    cy.start();
    cy.cpfRepetido();
    cy.contains('Este CPF já está em uso.')
    cy.on("uncaught:exception", (e, runnable) => {
        console.log("error", e);
        console.log("runnable", runnable);
        console.log("error", e.message);
        return false;
        });
});