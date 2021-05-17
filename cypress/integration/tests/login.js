/// <reference types="cypress"/>

describe('Caso de Teste: Verificar que as páginas do site do ConectePet estão funcionando e apresentam o contéudo correto.', () => {

    const userPass = 'senha';
    const wrongPass = '12345';
    const userMail = 'jon@gmail.com';
    const wrongMail = 'jon';
    const userName = 'Jon Arbuckle';
    const errorMessage = 'Email e/ou senha incorretos!';
    const requiredMessage = 'Esse campo é obrigatório.';
    const invalidEmailMessage = 'Email inválido.';

    it('Cenário: Entrar no site do ConectePet', () => { 

        cy.visit('http://localhost:3000/');
        cy.get('.makeStyles-titulo-11').should('contain.text', 'Login');
    });

    it('Cenário: Testar o form com valores de E-mail e Senha válidos. ', () => {

        cy.visit('http://localhost:3000/');
        cy.get('#textfield-email').clear();
        cy.get('#textfield-senha').clear();
        cy.get('#textfield-email').type(userMail);
        cy.get('#textfield-senha').type(userPass);
        cy.get('#button-entrar').click();
        cy.get('#username').should('contain.text', userName);

    });

    it('Cenário: Testar o form com valores de E-mail e Senha incorreta. ', () => {

        cy.visit('http://localhost:3000/');
        cy.get('#textfield-email').clear();
        cy.get('#textfield-senha').clear();
        cy.get('#textfield-email').type(userMail);
        cy.get('#textfield-senha').type(wrongPass);
        cy.get('#button-entrar').click();
        cy.get('#snackbar').should('contain.text', errorMessage);

    });

    it('Cenário: Testar o form com valores de E-mail e Senha vazios. ', () => {

        cy.visit('http://localhost:3000/');
        cy.get('#textfield-email').clear();
        cy.get('#textfield-senha').clear();
        cy.get('#button-entrar').click();
        cy.get('#textfield-email-helper-text > .MuiFormHelperText-root').should('contain.text', requiredMessage);
        cy.get('#textfield-senha-helper-text > .MuiFormHelperText-root').should('contain.text', requiredMessage);
    });

    it('Cenário: Testar o form com valores de E-mail inválido e Senha. ', () => {

        cy.visit('http://localhost:3000/');
        cy.get('#textfield-email').clear();
        cy.get('#textfield-senha').clear();
        cy.get('#textfield-email').type(wrongMail);
        cy.get('#textfield-senha').type(userPass);
        cy.get('#button-entrar').click();
        cy.get('#textfield-email-helper-text > .MuiFormHelperText-root').should('contain.text', invalidEmailMessage);
    });

    it('Cenário: Testar clicar no botão Cadastrar. ', () => {

        cy.visit('http://localhost:3000/');
        cy.get('#button-cadastrar').click();
        cy.get('.MuiToolbar-root > .MuiTypography-root').should('contain.text', 'Cadastrar Usuário');

    });

})