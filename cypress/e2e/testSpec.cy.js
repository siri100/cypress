require('cypress-xpath')

describe('My First Test', () => {
  it('Click the link', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('wait').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/commands/waiting')

    // Get an input, type into it
    cy.get('.wait-input1').type('fake@email.com')

    //  Verify that the value has been updated
    cy.get('.wait-input1').should('have.value', 'fake@email.com')
    
  })
})