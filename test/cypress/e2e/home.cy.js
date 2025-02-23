/// <reference types="cypress" />

import { homePage } from '../support/pages/home.page'

describe('Home MarkL', () => {
  it('Deve acessar a home', () => {
    homePage.visit();    
  })
})