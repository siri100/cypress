require('cypress-xpath')
const commonData = require('../properties/testData.json');
const TrelloLoginPage = require('../pages/trello.login.page.js');
const { default: trelloLoginPage } = require('../pages/trello.login.page.js');

describe('My Second Test', () => {
    it('Click the link', () => {
        cy.on('uncaught:exception', (err, runnable) => {

            return false

        })
        cy.visit('https://trello.com/login');
        cy.get('#user', { timeout: 10000 }).type(commonData.userName)
        cy.get('#login').click();
        cy.xpath("//div[contains(text(),'Log in to continue to:')]", { timeout: 10000 }).should('be.visible');
        cy.xpath("//input[@id='password']", { timeout: 10000 }).type(commonData.password);

        cy.get("button[id='login-submit'] span[class='css-178ag6o']", { timeout: 10000 }).click();
        cy.xpath("//span[@class='DD3DlImSMT6fgc'][normalize-space()='Boards']", { timeout: 10000 }).should('be.visible');

        cy.xpath("//span[@class='DD3DlImSMT6fgc'][normalize-space()='Boards']").then(($value) => {
            let homePageText = $value.text()
            cy.log(homePageText)
            expect(homePageText).to.be.equal('Boards')
        })

        cy.xpath("//div[@class='board-tile mod-add']").click();
        cy.xpath("//input[@type='text']").type(commonData.boardName);
        cy.xpath("//button[contains(text(),'Create')]").click();
        cy.xpath("//h1[normalize-space()='My New Cypress Board']").then(($value) => {
            let boardTitle = $value.text()
            cy.log(boardTitle)
            expect(boardTitle).to.be.equal('My New Cypress Board')
        })
    })
})










// after('Loggout from Trello Site' , () =>{
//     cy.visit('https://trello.com/u/srinivasmadnal/boards');
//     TrelloHomePage.logoutFromTrelloSite();
//     cy.xpath("//h5[normalize-space()='Log out of your Atlassian account']").then(($value) => {
//         let userName = $value.text()
//         cy.log(userName)
//         expect(userName).to.be.contain('Log out')
//     })
// })