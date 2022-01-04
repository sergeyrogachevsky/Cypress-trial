class Navigation {
  static siteTitle = `Demo Web Shop. Apparel & Shoes`;
  static headerLinks = ['Register', 'Log in', 'Shopping cart', 'Wishlist'];   
  static categoiesMenu = ['Books', 'Computers', 'Electronics', 'Apparel & Shoes', 'Digital downloads', 'Jewelry', 'Gift Cards'];
  
  static categoiesMenuLocator = '.header-menu > ul > li';
  static pageTitleLocator = '.page-title';
  static productsListLocator = '.product-grid > .item-box';
  static productItemLocator = '.product-item';

  static isElemetAppeared(locator) {
    cy.get(locator).should('be.visible');
  };

  static isHeaderLinksAppeared() {
    cy.get('.header-links').within( () => {
      this.headerLinks.forEach( (item) => {
        cy.contains(item);
      });
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

  static isProductListAppeared() {
    cy.get(this.productItemLocator).should('have.length', 8).each(() => {
      cy.get('.picture');
      cy.get('.details').children('h2.product-title>a').should('not.be.empty');
      cy.get('.details').children('.product-rating-box').children().should('have.class', 'rating');
      cy.get('.details').children('.add-info').children().should('have.class', 'prices')
        .children('span').should('not.be.empty');
      cy.get('.details').children('.add-info').children().should('have.class', 'buttons')
        .children().should('have.value', 'Add to cart').and('be.visible');
    });
  };
  
}
  
export default Navigation;