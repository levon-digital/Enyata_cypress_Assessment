import {Login} from "/cypress/fixtures/selector.js";
import { faker } from '@faker-js/faker';
const access = require("./Validlogin.cy.js");
describe("Login flow", function () {
beforeEach(function () {
  });
  it('User Login with Valid Credentials', () => {
    cy.visit('/')
    access.Validlogin();
    cy.get('.title').should('be.visible').should("have.text", "Products")
    cy.get('[data-test="shopping-cart-link"]').should('be.visible')

})

it('User Login with Invalid credentials', () => {
  cy.visit('/')
    cy.get(Login.usernamefield).should("be.visible").type(faker.person.lastName());
    cy.get(Login.passwordfield).should("be.visible").type(faker.internet.password());
    cy.get(Login.loginbutton).should("be.visible").click()
    cy.get('[data-test="error"]').should('be.visible').should("have.text", "Epic sadface: Username and password do not match any user in this service")
})

it('User Attempt to login when the username field is blank', () => {
  cy.visit('/')
    cy.get(Login.passwordfield).should("be.visible").type(faker.internet.password());
    cy.get(Login.loginbutton).should("be.visible").click()
   cy.get('[data-test="error"]').should('be.visible').should("have.text", "Epic sadface: Username is required")

})

it('User Attempt to login when the Password field is blank', () => {
  cy.visit('/')
  cy.get(Login.usernamefield).should("be.visible").type(faker.person.lastName());
    cy.get(Login.loginbutton).should("be.visible").click()
   cy.get('[data-test="error"]').should('be.visible').should("have.text", "Epic sadface: Password is required")

})

})
