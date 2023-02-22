require('cypress-xpath')
const commonData = require('../fixtures/testData.json');
const { default: TrelloLoginPage } = require('../pages/trello.login.page.js');
const { default: TrelloHomePage } = require('../pages/trello.home.page');

describe('Trello Test Suite', () => {
    before('Login to Trello site' , ()=>{
        cy.on('uncaught:exception', (err, runnable) => {return false})

        cy.visit('https://trello.com/login');
        TrelloLoginPage.loginToTrelloSite(commonData.userName,commonData.password);
        
        cy.xpath("//span[@class='DD3DlImSMT6fgc'][normalize-space()='Boards']").then(async ($value) => {
            let homePageText = await $value.text()
            cy.log(homePageText)
            expect(homePageText).to.be.equal('Boards')
        });
    })
    it('Verify Trello create new Board', () => {
        cy.on('uncaught:exception', (err, runnable) => {return false})
    
        TrelloHomePage.createNewBoard(commonData.boardName)
        cy.xpath("//h1[normalize-space()='My New Cypress Board']").then(($value) => {
            let boardTitle = $value.text()
            cy.log(boardTitle)
            expect(boardTitle).to.be.equal('My New Cypress Board')
        })
    })
 
})