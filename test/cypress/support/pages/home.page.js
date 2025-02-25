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

  deleteTask(nameTask) {
    cy.contains('p', nameTask)
      .parent() 
      .find ('button[class*=ItemToggle]').click();
  }


  markTaskAsCompleted(nameTask) {
    cy.contains('p', nameTask)
      .parent() 
      .find('button[class*=ItemToggle]').click();
    cy.contains('p', nameTask)
      .should('have.css', 'text-decoration-line', 'line-through');    

  }
  /* Explicação do cód acima:
  *   cy.contains('p', nameTask) - Encontre o item existente na tag "p" do html que contém o texto da variavel nameTask
  *   .parent()  - Navegue até o elemento pai que contém o checkbox 
  *   .find('button[class*=ItemToggle]').click(); - Dentro do contexto do item, a classe "._listItemToggle_1kgm5_16" contém o sufixo "_1kgm5_16" que pode variar a cada deploy. Para resolver o problema, usamos o xpath com * para encontrar o elemento que contém a classe "._listItemToggle_" e clicar nele. 
  *   .should('have.css', 'text-decoration-line', 'line-through') - Valida que o css marcou como marcada riscando o texto.
  */
  

}

export const homePage = new HomePage();