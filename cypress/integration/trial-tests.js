/// <reference types="cypress" />
import ApparelShoesPage from "../page-objects/apparel-shoes.page";

describe('Trial tests', () => {
    beforeEach(() => {
      cy.visit('/');
    })
    
    //test fails due to BUG-001 "Button "Add to cart" not appeared for all Products"
    it('Apparel and shoes page loading correctly', () => {
        cy.title().should('eq', ApparelShoesPage.siteTitle);
        ApparelShoesPage.isSearchMenuAppeared();
        ApparelShoesPage.isHeaderLinksAppeared();
        ApparelShoesPage.isCategoiesMenuAppeared();
        ApparelShoesPage.isSideMenuAppeared();
        ApparelShoesPage.isElemetAppeared(ApparelShoesPage.pageTitleLocator);
        ApparelShoesPage.isProductListAppeared(ApparelShoesPage.defaultPageSize);
        ApparelShoesPage.isProductSelectorsAppeared(ApparelShoesPage.productViewLocator, ApparelShoesPage.productSelectors[0]);
        ApparelShoesPage.isProductSelectorsAppeared(ApparelShoesPage.productSortingLocator, ApparelShoesPage.productSelectors[1]);
        ApparelShoesPage.isProductSelectorsAppeared(ApparelShoesPage.productPageSizeLocator, ApparelShoesPage.productSelectors[2]);
    });

    it('Sort products on the "Apparel and shoes" page', () => {
        ApparelShoesPage.sortBy(ApparelShoesPage.sortZToA);
        ApparelShoesPage.isSortingCorrect('reverse', ApparelShoesPage.productTitleLocator);
        ApparelShoesPage.sortBy(ApparelShoesPage.sortAToZ);
        ApparelShoesPage.isSortingCorrect('forward', ApparelShoesPage.productTitleLocator);
        ApparelShoesPage.sortBy(ApparelShoesPage.sortLowToHigh);
        ApparelShoesPage.isSortingCorrect('forward', ApparelShoesPage.productPriceLocator);
        ApparelShoesPage.sortBy(ApparelShoesPage.sortHighToLow);
        ApparelShoesPage.isSortingCorrect('reverse', ApparelShoesPage.productPriceLocator);
    });
    
    it('Paginate products on the "Apparel and shoes" page', () => {
        ApparelShoesPage.selectPageSize(ApparelShoesPage.defaultPageSize);
        ApparelShoesPage.numberOfProductsOnPage(ApparelShoesPage.defaultPageSize);
        ApparelShoesPage.isPageButtonsAppearedCorrectly(ApparelShoesPage.defaultPageSize)
        ApparelShoesPage.selectPageSize(ApparelShoesPage.minPageSize);
        ApparelShoesPage.numberOfProductsOnPage(ApparelShoesPage.minPageSize);
        ApparelShoesPage.isPageButtonsAppearedCorrectly(ApparelShoesPage.minPageSize)
        ApparelShoesPage.selectPageSize(ApparelShoesPage.maxPageSize);
        ApparelShoesPage.numberOfProductsOnPage(ApparelShoesPage.maxPageSize);
        ApparelShoesPage.isPageButtonsAppearedCorrectly(ApparelShoesPage.maxPageSize);
    });
})