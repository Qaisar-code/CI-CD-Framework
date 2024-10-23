/// <reference types="cypress"/>

describe('template spec', () => {

  beforeEach(()=>{
    cy.viewport(1500,850)
    cy.visit('https://automationexercise.com/')
    cy.url().should("include", "https://automationexercise.com/")
    cy.get('.shop-menu')
    .find('li').contains(' Signup / Login').click()
  })

  it('Login with invalid mail', () => { 
    cy.get('[data-qa="login-email"]').type('tester321@gmail.commmmm')
    cy.get('[data-qa="login-password"]').type('d*sQt9d3:%8QC-.')
    cy.get('[data-qa="login-button"]').click()
    cy.get(".login-form")
    .find('p').contains('Your email or password is incorrect!').should('be.visible')
  })

  it('Login with invalid password', () => { 
    cy.get('[data-qa="login-email"]').type('tester321@gmail.com')
    cy.get('[data-qa="login-password"]').type('d*sQt9d3:%8QC-.......')
    cy.get('[data-qa="login-button"]').click()
    cy.get(".login-form")
    .find('p').contains('Your email or password is incorrect!').should('be.visible')
  })

  it('Login with valid mail and password', () => { 
    cy.get('[data-qa="login-email"]').type('tester321@gmail.com')
    cy.get('[data-qa="login-password"]').type('d*sQt9d3:%8QC-.')
    cy.get('[data-qa="login-button"]').click()
    cy.get('.shop-menu')
    .find('li').contains(' Logout').should('be.visible')

    
  })






})