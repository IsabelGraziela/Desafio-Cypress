import { generateFirstName, generateLastName, generateDOB, generateCPF, generateEmail, generatePassword } from "./testDataUtils";

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const randomFirstName = generateFirstName();
const lastName = generateLastName();
const dob = generateDOB();
const cpf = generateCPF();
const email = generateEmail();
const plainPassword = generatePassword();

Cypress.Commands.add('start', () => {
    cy.visit("https://qastage.buildbox.one/18/cadastro/")
    cy.get('[data-cy="button-btn-enroll"]').click()

});

Cypress.Commands.add('inputUser', () => {
    cy.get('[data-cy="input-signup-personal-data-firstName"]').type(randomFirstName)
    cy.get('[data-cy="input-signup-personal-data-lastName"]').type(lastName)
    cy.get('[data-cy="input-signup-personal-data-birthDate"]').type(dob)
    cy.get('[data-cy="input-signup-personal-data-cpf"]').type(cpf)
    cy.get('[data-cy="input-signup-personal-data-email"]').type(email)
    cy.get('[data-cy="input-signup-personal-data-email-confirm"]').type(email)
    cy.get('[data-cy="input-signup-personal-data-password"]').type(plainPassword)
    cy.get('[data-cy="input-signup-personal-data-password-confirm"]').type(plainPassword)
    cy.contains('Selecione a proficiência...').click()
    cy.contains('Intermediate').click()
    cy.get('[data-cy="input-signup-personal-data-lgpd"]').click()
});

Cypress.Commands.add('buttonNext', () => {
    cy.get('[data-cy="button-signup_submit_button_1"]').click()  

});



Cypress.Commands.add('inputAdress', () => {
    cy.get('[data-cy="input-signup-address-cep"]').type("17025-776")
    cy.get('[data-cy="input-signup-address-number"]').type(123)
    cy.get('[data-cy="input-signup-address-complement"]').type('casa')
    cy.get('[data-cy="button-signup_submit_button_3"]').click()
    cy.get('[data-cy="button-wide_window_button"]').should('contain','Acessar Plataforma')
    cy.get('[data-cy="button-wide_window_button"]').click()
    cy.get('.text-lg').should('contain','Welcome back!')
});
Cypress.Commands.add('loginSucesso', () => {
    cy.get('#user_login').type(email)
    cy.get('#user_pass').type(plainPassword)
    cy.get('#wp-submit').click()
    cy.get('.capitalize > a').should('contain', randomFirstName) 
});

Cypress.Commands.add('cpfInvalid', () => {
    cy.get('[data-cy="input-signup-personal-data-firstName"]').type(randomFirstName)
    cy.get('[data-cy="input-signup-personal-data-lastName"]').type(lastName)
    cy.get('[data-cy="input-signup-personal-data-birthDate"]').type(dob)
    cy.get('[data-cy="input-signup-personal-data-cpf"]').type('12312312312')
   
    cy.get('[data-cy="input-signup-personal-data-email"]').type(email)
    cy.get('[data-cy="input-signup-personal-data-email-confirm"]').type(email)
    cy.get('[data-cy="input-signup-personal-data-password"]').type(plainPassword)
    cy.get('[data-cy="input-signup-personal-data-password-confirm"]').type(plainPassword)
    cy.contains('Selecione a proficiência...').click()
    cy.contains('Intermediate').click()
    cy.get('[data-cy="input-signup-personal-data-lgpd"]').click()
    // cy.get('[data-cy="button-signup_submit_button_1"]').click()  
    // cy.get('.input-error').should('contain','CPF inválido')
    
});

Cypress.Commands.add('cpfRepetido', () => {
    cy.get('[data-cy="input-signup-personal-data-firstName"]').type(randomFirstName)
    cy.get('[data-cy="input-signup-personal-data-lastName"]').type(lastName)
    cy.get('[data-cy="input-signup-personal-data-birthDate"]').type(dob)
    cy.get('[data-cy="input-signup-personal-data-cpf"]').type(cpf)
    cy.get('[data-cy="input-signup-personal-data-email"]').type(email)
    cy.get('[data-cy="input-signup-personal-data-email-confirm"]').type(email)
    cy.get('[data-cy="input-signup-personal-data-password"]').type(plainPassword)
    cy.get('[data-cy="input-signup-personal-data-password-confirm"]').type(plainPassword)
    cy.contains('Selecione a proficiência...').click()
    cy.contains('Intermediate').click()
    cy.get('[data-cy="input-signup-personal-data-lgpd"]').click()
    
});

Cypress.Commands.add('dataNascInvalida', () => {
    cy.get('[data-cy="input-signup-personal-data-firstName"]').type(randomFirstName)
    cy.get('[data-cy="input-signup-personal-data-lastName"]').type(lastName)
    cy.get('[data-cy="input-signup-personal-data-birthDate"]').type('30/13/20')
    cy.get('[data-cy="input-signup-personal-data-cpf"]').type(cpf)
    cy.get('[data-cy="input-signup-personal-data-email"]').type(email)
    cy.get('[data-cy="input-signup-personal-data-email-confirm"]').type(email)
    cy.get('[data-cy="input-signup-personal-data-password"]').type(plainPassword)
    cy.get('[data-cy="input-signup-personal-data-password-confirm"]').type(plainPassword)
    cy.contains('Selecione a proficiência...').click()
    cy.contains('Intermediate').click()
    cy.get('[data-cy="input-signup-personal-data-lgpd"]').click()
});

Cypress.Commands.add('emailInvalido', () => {
    cy.get('[data-cy="input-signup-personal-data-firstName"]').type(randomFirstName)
    cy.get('[data-cy="input-signup-personal-data-lastName"]').type(lastName)
    cy.get('[data-cy="input-signup-personal-data-birthDate"]').type(dob)
    cy.get('[data-cy="input-signup-personal-data-cpf"]').type(cpf)
    cy.get('[data-cy="input-signup-personal-data-email"]').type('email')
    cy.get('[data-cy="input-signup-personal-data-email-confirm"]').type(email)
    cy.get('[data-cy="input-signup-personal-data-password"]').type(plainPassword)
    cy.get('[data-cy="input-signup-personal-data-password-confirm"]').type(plainPassword)
    cy.contains('Selecione a proficiência...').click()
    cy.contains('Intermediate').click()
    cy.get('[data-cy="input-signup-personal-data-lgpd"]').click()
});

Cypress.Commands.add('emaildiferente', () => {
    cy.get('[data-cy="input-signup-personal-data-firstName"]').type(randomFirstName)
    cy.get('[data-cy="input-signup-personal-data-lastName"]').type(lastName)
    cy.get('[data-cy="input-signup-personal-data-birthDate"]').type(dob)
    cy.get('[data-cy="input-signup-personal-data-cpf"]').type(cpf)
    cy.get('[data-cy="input-signup-personal-data-email"]').type('email@123.com')
    cy.get('[data-cy="input-signup-personal-data-email-confirm"]').type(email)
    cy.get('.input-error').should('contain','Os e-mails não são iguais')
    cy.get('[data-cy="input-signup-personal-data-password"]').type(plainPassword)
    cy.get('[data-cy="input-signup-personal-data-password-confirm"]').type(plainPassword)
    cy.contains('Selecione a proficiência...').click()
    cy.contains('Intermediate').click()
    cy.get('[data-cy="input-signup-personal-data-lgpd"]').click()
});

Cypress.Commands.add('nameInvalid', () => {
    cy.get('[data-cy="input-signup-personal-data-firstName"]').type('123')
    cy.get('[data-cy="input-signup-personal-data-lastName"]').type('123')
    cy.get('[data-cy="input-signup-personal-data-birthDate"]').type(dob)
    cy.get('[data-cy="input-signup-personal-data-cpf"]').type(cpf)
    cy.get('[data-cy="input-signup-personal-data-email"]').type(email)
    cy.get('[data-cy="input-signup-personal-data-email-confirm"]').type(email)
    cy.get('[data-cy="input-signup-personal-data-password"]').type(plainPassword)
    cy.get('[data-cy="input-signup-personal-data-password-confirm"]').type(plainPassword)
    cy.contains('Selecione a proficiência...').click()
    cy.contains('Intermediate').click()
    cy.get('[data-cy="input-signup-personal-data-lgpd"]').click()
});

Cypress.Commands.add('termosNotSet', () => {
    cy.get('[data-cy="input-signup-personal-data-firstName"]').type(randomFirstName)
    cy.get('[data-cy="input-signup-personal-data-lastName"]').type(lastName)
    cy.get('[data-cy="input-signup-personal-data-birthDate"]').type(dob)
    cy.get('[data-cy="input-signup-personal-data-cpf"]').type(cpf)
    cy.get('[data-cy="input-signup-personal-data-email"]').type(email)
    cy.get('[data-cy="input-signup-personal-data-email-confirm"]').type(email)
    cy.get('[data-cy="input-signup-personal-data-password"]').type(plainPassword)
    cy.get('[data-cy="input-signup-personal-data-password-confirm"]').type(plainPassword)
    cy.contains('Selecione a proficiência...').click()
    cy.contains('Intermediate').click()
    // cy.get('[data-cy="input-signup-personal-data-lgpd"]').click()
});