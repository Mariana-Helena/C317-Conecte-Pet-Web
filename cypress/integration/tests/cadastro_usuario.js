/// <reference types="cypress"/>

describe('Caso de Teste: Verificar que as páginas do site do ConectePet estão funcionando e apresentam o contéudo correto.', () => {

    const userName = 'Usuario Teste';
    const userPhone = '12345678';
    const userMail = 'teste@gmail.com';
    const userPass = 'senha';
    const successMessage = 'Usuário cadastrado!';

    it('Cenário: Testar registro de usuário. ', () => {
        
        cy.visit('http://localhost:3000/');
        cy.get('#button-cadastrar').click();
        cy.get('.MuiToolbar-root > .MuiTypography-root').should('contain.text', 'Cadastrar Usuário');
        cy.get('#nome').clear();
        cy.get('#telefone').clear();
        cy.get('#email').clear();
        cy.get('#senha').clear();
        cy.get('#nome').type(userName);
        cy.get('#telefone').type(userPhone);
        cy.get('#email').type(userMail);
        cy.get('#senha').type(userPass);
        cy.get('.makeStyles-buttonContained-20').click()
        cy.get('.makeStyles-success-36').should('contain.text',successMessage);

        cy.get('.makeStyles-buttonContainedC-21').click()

        cy.get('#textfield-email').clear();
        cy.get('#textfield-senha').clear();
        cy.get('#textfield-email').type(userMail);
        cy.get('#textfield-senha').type(userPass);
        cy.get('#button-entrar').click();
        cy.get('.makeStyles-titulo-61').should('contain.text','Pets cadastrados');
    });


})