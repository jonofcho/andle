
/// <reference types="cypress" />
describe('Collection Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/')
    })
    it('should display products' , ()=> {
        cy.get('.collection-product-grid').should('be.visible');
    })
    it('should allow product image click', () =>{
        cy.get('.product-image-container').find('img').first().click();
    })
})