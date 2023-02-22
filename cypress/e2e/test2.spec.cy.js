require('cypress-xpath')

describe('My Second Test', () => {
  it('Click the link', () => {
 
    let username = 'maxwell.nwajei@rapha.cc';
    let password = 'Haven2012!'
     cy.visit('https://www.rapha.cc/gb/en/login');
     cy.url().should('include', '/login')
     cy.get('#j_username').wait(500).type(username);
     cy.wait(5000);
     cy.get('#j_password').type(password);
     cy.xpath("//button[normalize-space()='Sign in']").click();
     cy.contains('Explore Powerweave Shoe').should('have.text', 'Powerweave')
    
  })
})