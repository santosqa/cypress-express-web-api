class HomePage {
  visit() {
    cy.visit('/')
    cy.title().should('eq', 'Gerencie suas tarefas com Mark L')
  }

  createTask(nameTask) {
    cy.get('input[placeholder="Add a new Task"]').type(nameTask);
    cy.contains("button", "Create").click();
  }
  
  validateTask(nameTask) {
    cy.contains('main div p', nameTask).should("be.visible");
  }
  
  validateMessage(messageDuplicateTask) {
    cy.get('.swal2-html-container')
      .should('be.visible')
      .should('contain.text', messageDuplicateTask);
  }


}

export const homePage = new HomePage();