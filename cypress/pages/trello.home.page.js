

export class TrelloHomePage {

    get createNewBoardBtn() {
        return cy.xpath("//div[@class='board-tile mod-add']", { timeout: 10000 })
    }
    get boardTitleTxtBox() {
        return cy.xpath("//input[@type='text']", { timeout: 10000 })
    }
    get createBoardBtn() {
        return  cy.xpath("//button[contains(text(),'Create')]", { timeout: 10000 })
    }
    get userIcon() {
        return  cy.xpath("//span[@title='srinivas madnal (srinivasmadnal)']", { timeout: 10000 })
    }
    get logoutBtn() {
        return  cy.xpath("//button[@data-testid='account-menu-logout']", { timeout: 10000 })
    }
    

   
    createNewBoard(newBoardName){
         this.createNewBoardBtn.click()
         this.boardTitleTxtBox.type(newBoardName)
         this.createBoardBtn.click()
    }

    logoutFromTrelloSite(){
        this.userIcon.click()
        this.logoutBtn.click()
    
   }



}

export default new TrelloHomePage();