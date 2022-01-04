class Navigation {
    static siteTitle = `Demo Web Shop. Apparel & Shoes`;

    static headerLinks = ['Register', 'Log in', 'Shopping cart', 'Wishlist'];

    static isHeaderLinksAppeared() {
      cy.get('.header-links').within( () => {
        this.headerLinks.forEach( (item) => {
          cy.contains(item);
        });
      });
    };
  
    static navigateCreativeAssets() {
      return cy.get(HomePage.CreativeAssets, {timeout: 10000}).first().click();
    }
  }
  
  export default Navigation;