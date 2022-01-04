/// <reference types="cypress" />
import Navigation from "../page-objects/navigation.page";

describe('Trial tests', () => {
    beforeEach(() => {
      cy.visit('/');
    })
  
    it('Apparel and shoes page loading correctly', () => {
        expect(true).to.equal(true);
        cy.title().should('eq', Navigation.siteTitle);
        cy.get('.search-box>form').within(() => {
            cy.get('input[type = "text"]').should('have.value', 'Search store')
            cy.get('input[type = "submit"]').should('have.value', 'Search');
        });
        Navigation.isHeaderLinksAppeared();

    //   cy.get('.todo-list li').should('have.length', 2)
    //   // We can go even further and check that the default todos each contain
    //   // the correct text. We use the `first` and `last` functions
    //   // to get just the first and last matched elements individually,
    //   // and then perform an assertion with `should`.
    //   cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
    //   cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
    })
})