/// <reference types="cypress" />
describe('User Can Add Product to Checkout', () => {
    before(() => {
        cy.visit('http://localhost:4200/')
    })
    it('should click into a product', () => {
        cy.get('.product-image-container').find('img').first().click();

    })
    it('should add a product into the cart' , () => {
        cy.get('.atc').click()
        // cy.route()
        
    })
    it('should go into cart page', () => {
        cy.get('.header-user-actions').find('a').contains('cart').click()
    })

})