/// <reference types="cypress" />

describe('tasks', () => {
  it('deve criar uma nova tarefa', () => {
    cy.visit('http://localhost:3000/')
    cy.title().should('eq', 'Gerencie suas tarefas com Mark L')
    cy.get('input[placeholder="Add a new Task"]').type('SantosQA - Trilha Cypress Udemy')

  })
  
})
