
describe('Teste Exceções', () => {
    it('Cadastrar usuário com nome inválido', () => {
        cy.start();
        cy.nameInvalid(); //bug => não identificou o nome errado
        cy.get('.input-error').should('contain','Preencha corretamente')   
  });
    it('Cadastrar usuário com cpf inválido', () => {
          cy.start();
          cy.cpfInvalid();  
          cy.get('.input-error').should('contain','CPF inválido')
    });

    it('Cadastrar usuário com Data de Nasc inválida', () => {
        cy.start();
        cy.dataNascInvalida(); //bug => O sistema não verifica se a data é valida (30/02/2000 ou 45/13/2000)quando todos os numeros são informados
        cy.get('.input-error').should('contain','Data de nascimento inválida')
    });

    it('Cadastrar usuário com email inválido', () => {
        cy.start();
        cy.emailInvalido(); 
        cy.get(':nth-child(3) > :nth-child(1) > .form-container > .input-error').should('contain','Email inválido.')
        
    });

    it('Cadastrar usuário com email diferente', () => {
        cy.start();
        cy.emaildiferente(); 
        cy.buttonNext();
          
    });
   
    it('Cadastrar usuário com senhas diferentes', () => {
            cy.start();
            cy.get('[data-cy="input-signup-personal-data-password"]').type('aaaaa')
            cy.get('[data-cy="input-signup-personal-data-password-confirm"]').type('bbbbb')
            cy.contains('As senhas não são iguais')
        });
    it('Não selecionar termos', () => {
            cy.start();
            cy.termosNotSet();
            cy.buttonNext();
            cy.get('[data-cy="button-signup_submit_button_1"]').should('exist');
        });

  })