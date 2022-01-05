export class HomePage {

    static siteTitle = `Demo Web Shop. Apparel & Shoes`;
    static headerLinks = ['Register', 'Log in', 'Shopping cart', 'Wishlist'];   
    static categoiesMenu = ['Books', 'Computers', 'Electronics', 'Apparel & Shoes', 'Digital downloads', 'Jewelry', 'Gift Cards'];
    static sideMenu = ['Categories', 'Manufacturers', 'Newsletter'];
    static productSelectors = ['View as', 'Sort by', 'Display'];
    static defaultPageSize = '8';
    static minPageSize = '4';
    static maxPageSize = '12';

    static categoiesMenuLocator = '.header-menu > ul > li';
    static sideMenuLocator = '.side-2 > div > .title';
    static pageTitleLocator = '.page-title';

}