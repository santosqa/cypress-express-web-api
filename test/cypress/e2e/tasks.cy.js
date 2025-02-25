/// <reference types="cypress" />
import { homePage } from "../support/pages/home.page";
import { api } from "../support/commands";

const nameTask = "Trilha Udemy Cypress";
const messageDuplicateTask = "Task already exists!";

describe("tasks", () => {
  
  context('Contexto criar tarefa', () => { 

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
  
     // Exemplo de teste pegando um elemento de mensagem nativo do navegador, que não existe no html.
     it("Nao deve criar uma nova tarefa com campo em branco", () => {
      homePage.visit();
      cy.contains("button", "Create").click();
      cy.get('input[placeholder="Add a new Task"]') // Seleciona o campo input
        .invoke("prop", "validationMessage") // Invoca a propriedade do campo. pois é um messege do navegador não visivel no html
        .should((text) => {  // armazena o texto capturado do elemento em uma variavel
          expect("This is a required field").to.eq(text) // valida se o texto é igual ao esperado
        })
    });

  })
 
  context('Contexto marcar tarefa como concluida', () => {

    it("Deve marcar uma tarefa como concluida", () => {
      api.deleteTasks(nameTask);
      api.postTasks(nameTask);
      homePage.visit();
      homePage.markTaskAsCompleted(nameTask);
    });
    
  })
  
  context('Contexto excluir tarefa ', () => {
      
    it("Deve excluir uma tarefa", () => {
      api.deleteTasks(nameTask);
      api.postTasks(nameTask);
      homePage.visit();
      homePage.deleteTask(nameTask);
    });

  });

});
