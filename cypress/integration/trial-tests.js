/// <reference types="cypress" />
import Navigation from "../page-objects/navigation.page";

describe('Trial tests', () => {
    beforeEach(() => {
      cy.visit('/');
    })
  
    it('Apparel and shoes page loading correctly', () => {
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
        Navigation.isProductSelectorsAppeared(Navigation.productViewLocator, Navigation.productSelectors[0]);
        Navigation.isProductSelectorsAppeared(Navigation.productSortingLocator, Navigation.productSelectors[1]);
        Navigation.isProductSelectorsAppeared(Navigation.productPageSizeLocator, Navigation.productSelectors[2]);
    });

    it('Sort products on the "Apparel and shoes" page', () => {
        Navigation.sortBy(Navigation.sortZToA);
        Navigation.isSortingCorrect('reverse', Navigation.productTitleLocator);
        Navigation.sortBy(Navigation.sortAToZ);
        Navigation.isSortingCorrect('forward', Navigation.productTitleLocator);
        Navigation.sortBy(Navigation.sortLowToHigh);
        Navigation.isSortingCorrect('forward', Navigation.productPriceLocator);
        Navigation.sortBy(Navigation.sortHighToLow);
        Navigation.isSortingCorrect('reverse', Navigation.productPriceLocator);
    });

})