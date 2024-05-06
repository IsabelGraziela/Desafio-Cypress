describe('Validar email único', () => {
    it('Cadastrar usuário com email repetido', () => {
        cy.start();
        cy.inputUser(); 
        cy.buttonNext();
        cy.inputAdress();
        cy.start();
        cy.inputUser();
        cy.contains('Este email já está em uso.')
        cy.on("uncaught:exception", (e, runnable) => {
            console.log("error", e);
            console.log("runnable", runnable);
            console.log("error", e.message);
            return false;
            });
    });
});