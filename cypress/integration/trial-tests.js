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
        Navigation.isCategoiesMenuAppeared();
        Navigation.isSideMenuAppeared();
        Navigation.isElemetAppeared(Navigation.pageTitleLocator);
        Navigation.isProductListAppeared();
    })
})