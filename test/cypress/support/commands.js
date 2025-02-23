// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const hostApi = "http://localhost:3333";
class Api {
  deleteTasks(nameTask) {
    cy.request({
      url: hostApi + '/helper/tasks',
      method: 'DELETE',
      body: { name: nameTask}
    }).then((res) => {
      expect(res.status).to.eq(204);
    });
  }

  postTasks(nameTask) {
    cy.request({
      url: hostApi + '/tasks',
      method: 'POST',
      body: { name: nameTask, is_done: false }
    }).then((res) => {
      expect(res.status).to.eq(201);
    });
  }

}


export const api = new Api();