/// <reference types="cypress" />
import { homePage } from "../support/pages/home.page";
import { api } from "../support/commands";

const nameTask = "Trilha Udemy Cypress";
const messageDuplicateTask = "Task already exists!";

describe("tasks", () => {
  it("Deve criar uma nova tarefa", () => {
    api.deleteTasks(nameTask);
    homePage.visit();
    homePage.createTask(nameTask);
    homePage.validateTask(nameTask);
  });

  it("Não deve permitir criar tarefa duplicada", () => {
    api.deleteTasks(nameTask);
    api.postTasks(nameTask);
    homePage.visit();
    homePage.createTask(nameTask);
    homePage.validateMessage(messageDuplicateTask);
  });

  it("Deve marcar uma tarefa como concluida", () => {
    api.deleteTasks(nameTask);
    api.postTasks(nameTask);
    homePage.visit();
    cy.contains("button", "Mark as done").click();
    homePage.validateTask(nameTask);
  });

  it("Deve excluir uma tarefa", () => {
    api.deleteTasks(nameTask);
    api.postTasks(nameTask);
    homePage.visit();
    cy.contains("button", "Delete").click();
    homePage.validateTask(nameTask);
  });
  

});
