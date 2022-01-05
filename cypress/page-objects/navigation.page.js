class Navigation {
  static siteTitle = `Demo Web Shop. Apparel & Shoes`;
  static headerLinks = ['Register', 'Log in', 'Shopping cart', 'Wishlist'];   
  static categoiesMenu = ['Books', 'Computers', 'Electronics', 'Apparel & Shoes', 'Digital downloads', 'Jewelry', 'Gift Cards'];
  static sideMenu = ['Categories', 'Manufacturers', 'Newsletter'];
  static productSelectors = ['View as', 'Sort by', 'Display'];


  static categoiesMenuLocator = '.header-menu > ul > li';
  static sideMenuLocator = '.side-2 > div > .title';
  static pageTitleLocator = '.page-title';
  static productsListLocator = '.product-grid > .item-box';
  static productItemLocator = '.product-item';
  static productViewLocator = '.product-viewmode';
  static productSortingLocator = '.product-sorting';
  static productPageSizeLocator = '.product-page-size';
  static productSortingOptionsLocator = 'select#products-orderby';
  static productPageSizeOptionsLocator = 'select#products-pagesize';
  static productPriceLocator = '.price.actual-price';
  static productTitleLocator = 'h2.product-title>a';
  static sortZToA = 'Name: Z to A';
  static sortAToZ = 'Name: A to Z';
  static sortLowToHigh = 'Price: Low to High';
  static sortHighToLow = 'Price: High to Low';

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

  static isSideMenuAppeared() {
    // cy.get(this.sideMenuLocator).eq(this.sideMenu.length);
    cy.get(this.sideMenuLocator).within( () => {
      this.sideMenu.forEach( (item) => {
        cy.contains(item);
      });
    });
  };

  static isProductListAppeared() {
    cy.get(this.productsListLocator).should('be.visible');
    cy.get(this.productItemLocator).should('have.length', 8).each(() => {
      cy.get('.picture');
      cy.get('.details').children('h2.product-title>a').should('not.be.empty');
      cy.get('.details').children('.product-rating-box').children().should('have.class', 'rating');
      cy.get('.details').children('.add-info').children().should('have.class', 'prices')
        .children('span').should('not.be.empty');
      cy.get('.details').children('.add-info').children().should('have.class', 'buttons')
        // .children().should('have.value', 'Add to cart').and('be.visible');
    });
  };

  static isProductSelectorsAppeared(locator, text) {
    cy.get(locator).contains(text);
  };

  static sortBy(sortType) {
    cy.get(this.productSortingOptionsLocator).select(sortType);
    cy.wait(500);
  }

  static isSortingCorrect(sortOrder, sortValue) {
    let arr = [];
    function isGreat(index, array) {
      return (array[index].toLocaleLowerCase()) >= (array[index-1].toLocaleLowerCase());
    };
    cy.get(sortValue).then(($els) => {
      arr = Cypress._.map($els, 'innerText');

      arr.forEach((item, index) => {
        // cy.log(item.toLocaleLowerCase());
        if (arr[index-1] !== undefined) {
          if (sortOrder === 'forward') {expect(isGreat(index, arr)).to.be.true};
          if (sortOrder === 'reverse') {expect(isGreat(index, arr)).to.be.false};
        };
      });
    });
  }
  
}
  
export default Navigation;