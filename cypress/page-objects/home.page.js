export class HomePage {

    static siteTitle = `Demo Web Shop. Apparel & Shoes`;
    static headerLinks = ['Register', 'Log in', 'Shopping cart', 'Wishlist'];   
    static categoiesMenu = ['Books', 'Computers', 'Electronics', 'Apparel & Shoes', 'Digital downloads', 'Jewelry', 'Gift Cards'];
    static sideMenu = ['Categories', 'Manufacturers', 'Newsletter'];
    static productSelectors = ['View as', 'Sort by', 'Display'];
    static defaultPageSize = '8';
    static minPageSize = '4';
    static maxPageSize = '12';

    static headerLinksLocator = '.header-links';
    static categoiesMenuLocator = '.header-menu > ul > li';
    static sideMenuLocator = '.side-2 > div > .title';
    static pageTitleLocator = '.page-title';
    static searchFormLocator = '.search-box>form';
    static searchTextFieldLocator = 'input[type = "text"]';
    static searchButtonLocator = 'input[type = "submit"]';

    static isElemetAppeared(locator) {
        cy.get(locator).should('be.visible');
      };
      
      static isSiteTitleAppeared() {
        cy.title().should('eq', this.siteTitle);
      };
    
      static isHeaderLinksAppeared() {
        cy.get(ths.headerLinksLocator).within( () => {
          this.headerLinks.forEach( (item) => {
            cy.contains(item);
          });
        });
      };
    
      static isSearchMenuAppeared() {
        cy.get(this.searchFormLocator).within(() => {
          cy.get(this.searchTextFieldLocator).should('have.value', 'Search store')
          cy.get(this.searchButtonLocator).should('have.value', 'Search');
        });
      };
    
      static isCategoiesMenuAppeared() {
        cy.get(this.categoiesMenuLocator).eq(this.categoiesMenu.length);
        cy.get(this.categoiesMenuLocator).within( () => {
          this.categoiesMenu.forEach( (item) => {
            cy.contains(item);
          });
        });
      };
    
      static isSideMenuAppeared() {
        cy.get(this.sideMenuLocator).within( () => {
          this.sideMenu.forEach((item) => {
            cy.contains(item);
          });
        });
      };

}