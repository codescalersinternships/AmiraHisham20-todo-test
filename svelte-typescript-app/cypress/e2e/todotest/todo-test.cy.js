import todo from"../../objects/todo"
describe('CypressTest', function(){

    before(function(){
        cy.visit('http://localhost:3001/')
    })

    it('Create New task',function(){
        todo.Navigatecreatebtn()
    })

    it('Delete task by button',function(){
        todo.Navigatedeletebtn()
    })
    it('Delete task by mark',function(){
        todo.Navigatedelete()
    })

    it('Update task',function(){
        todo.NavigateUpdateebtn()
    })

    it('Get task By ID',function(){
        todo.NavigateGetbtn()
    })
    it('Check task by mark',function(){
        todo.NavigateCheckmark()
    })
    it('Show title',function(){
        todo.Navigatetitle()
    })
    //check of unexsiing key
    it('Delete task by unexsiting ID ',function(){
        todo.Navigatedeletebtn_wrong_ID()
    })
    it('Get task by unexsiting ID ',function(){
        todo.NavigateGetbtn_wrong_ID()
    })
    it('Create task without input task ',function(){
        todo.Navigatecreatebtn_without_task()
    })

    it('Create task with char ID ',function(){
        todo.Navigatecreatebtn_withCharID()
    })
    it('Create task with Exsiting ID ',function(){
        todo.Navigatecreatebtn_withExsiting_ID()
    })
    after(function(){
        cy.log('Done')
    })
})
