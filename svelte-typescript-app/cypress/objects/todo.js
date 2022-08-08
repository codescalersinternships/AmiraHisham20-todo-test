class Todopage{
    getFromtitle()
    {
        return cy.get('h2.svelte-ke1wqu')//.contains
    }
    getIDbtn()
    {
        return cy.get('#inputID')   
    }
    gettaskbtn()
    {
        return cy.get('#inputTask')
    }
    getcreatebtn()
    {
        return cy.get('[type="create"]')
    }
    getDeletebtn()
    {
        return cy.get('[type="delete"]')
    }
    getupdatebtn()
    {
        return cy.get('.txt_filed').find('[type="update"]')
    }
    getGetByIDbtn()
    {
        return cy.get('[type="get"]')
    }
    getDeletekmark()
    {
        return cy.get(':nth-child(4) > .btn > i')
    }
    getCheckmark()
    {
        return cy.get(':nth-child(4) > input')
    }

    //cases of existing ID
    Navigatetitle()
    {
        this.getFromtitle().contains("TODO")
    }

    Navigatedeletebtn()
    {
        this.getFromtitle().contains("TODO")
        this.getIDbtn().type("1")
        this.getDeletebtn().click()
    }
    Navigatecreatebtn()
    {
        this.getFromtitle().contains("TODO")
        this.getIDbtn().type("30")
        this.gettaskbtn().type("proj30")
        this.getcreatebtn().click()
    }
    NavigateGetbtn()
    {
        this.getFromtitle().contains("TODO")
        this.getIDbtn().clear({force: true}).type("9")
        this.getGetByIDbtn().click()
    }
    NavigateUpdateebtn()
    {
        this.getFromtitle().contains("TODO")
        this.getIDbtn().type("999")
        this.gettaskbtn().type("proj11")
        this.getupdatebtn().click()
    }
    NavigateCheckmark()
    {
        this.getCheckmark().click()
    }
    Navigatedelete()
    {
        this.getDeletekmark().click()
    }


    //cases of un exciting ID
    NavigateGetbtn_wrong_ID()
    {
        this.getFromtitle().contains("TODO")
        this.getIDbtn().clear({force: true}).type("80")
        this.getGetByIDbtn().click()
    }
    Navigatedeletebtn_wrong_ID()
    {
        this.getFromtitle().contains("TODO")
        this.getIDbtn().clear({force: true}).type("55")
        this.getDeletebtn().click()
    }
    Navigatecreatebtn_without_task()
    {
        this.getFromtitle().contains("TODO")
        this.getIDbtn().clear({force: true}).type("60")
        this.getcreatebtn().click()
    }
    Navigatecreatebtn_withCharID()
    {
        this.getFromtitle().contains("TODO")
        this.getIDbtn().clear({force: true}).type("Amira")
        this.gettaskbtn().type("test")
        this.getcreatebtn().click()
    }
    Navigatecreatebtn_withExsiting_ID()
    {
        this.getFromtitle().contains("TODO")
        this.getIDbtn().clear({force: true}).type("9")
        this.gettaskbtn().type("Task9")
        this.getcreatebtn().click()
    }
    
}
export default new Todopage();