// <reference types="cypress" />

describe('connexion a la page acceuil de maarchRM', () => {
    it('connexion with login and password', () => {
      cy.visit('http://18.207.217.149/')
      cy.get('#userName').type('superadmin')
      cy.get('#password').type('admin')
      cy.get('#loginButton').click()
    })
  })