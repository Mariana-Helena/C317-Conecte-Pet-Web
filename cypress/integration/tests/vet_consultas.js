/// <reference types="cypress"/>

describe('Caso de Teste: Verificar que as páginas do site do ConectePet estão funcionando e apresentam o contéudo correto.', () => {

    const userPass = 'senha';
    const userMail = 'joy@gmail.com';
    const successMessage = 'Consulta agendada!';
    const petMessage = 'Pet encontrado!';

    it('Cenário: Testar registro e exclusão de consulta. ', () => {

        cy.visit('http://localhost:3000/');
        cy.get('#textfield-email').clear();
        cy.get('#textfield-senha').clear();
        cy.get('#textfield-email').type(userMail);
        cy.get('#textfield-senha').type(userPass);
        cy.get('#button-entrar').click();
        cy.get('#menu-consultas').click();   
        cy.get('#button-agendar-consulta').click();        
        cy.get('#email').type('jon@gmail.com');
        cy.get('#search').click();
        cy.get('#snackbar').should('contain.text', petMessage);
        cy.get('#pet').click();
        cy.get('#menu-pet > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click();
        cy.get('.MuiButton-containedPrimary').click();
        cy.get('#snackbar').should('contain.text', successMessage);
        cy.get('.MuiButton-containedSecondary').click();
        cy.get('#pet-nome-0').should('contain.text', 'Garfield');
        cy.get('#button-excluir-0').click();
        cy.get('#button-confirmar').click();
        cy.get('#sem-consulta').should('contain.text', 'Nenhuma consulta encontrada!');
    });


})