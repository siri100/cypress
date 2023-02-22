require('cypress-xpath')

describe('My Sampke Test', () => {
  it('Click the link', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    //Radio
    cy.get("input[value='radio2']").check()

    //DropDown
    cy.get('select').select('Option1')

    //auto suggestion 
    cy.get('#openwindow').click()
    cy.window().then((win) => {
        cy.stub(win, 'open', url => {
            win.location.href = 'http://www.qaclickacademy.com/';
        }).as("popup")
    })
    cy.get("//div[@class='listbuilder-popup-content']").click()


    
  })
})