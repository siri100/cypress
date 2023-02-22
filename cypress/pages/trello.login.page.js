

export class TrelloLoginPage {

    get userIDTextBox() {
        return cy.get('#user', { timeout: 10000 });
    }

    get continueBtn() {
        return cy.get('#login', { timeout: 10000 });
    }

    get passwordFieldTxt() {
        return cy.xpath("//div[contains(text(),'Log in to continue to:')]", { timeout: 10000 }).should('be.visible');
    }

    get paswordTextBox() {
        return cy.xpath("//input[@id='password']", { timeout: 10000 });
    }

    get loginSubmitBtn() {
        return cy.get("button[id='login-submit'] span[class='css-178ag6o']", { timeout: 10000 })
    }

    get homePageBoardTxt() {
        return cy.xpath("//span[@class='DD3DlImSMT6fgc'][normalize-space()='Boards']", { timeout: 10000 }).should('be.visible');
    }

    get homePageText() {
        cy.xpath("//span[@class='DD3DlImSMT6fgc'][normalize-space()='Boards']").then(async ($value) => {
            let homePageText = await $value.text()
            cy.log(homePageText)
            return homePageText
        });
    }




 loginToTrelloSite(userName, password) {

        this.userIDTextBox.type(userName)
        this.continueBtn.click()
        this.passwordFieldTxt;
        this.paswordTextBox.type(password);
        this.loginSubmitBtn.click();
    }
}

export default new TrelloLoginPage();