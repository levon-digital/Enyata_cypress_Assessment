import {filter} from "/cypress/fixtures/selector.js";
const access = require("./Validlogin.cy.js");
describe("Filter with Name", function () {
beforeEach(function () {
  });
  it('Filter with Z to A', () => {
    cy.visit('/')
    access.Validlogin();
    cy.get('.select_container').should("be.visible").click();
    cy.get('.product_sort_container').select('Name (Z to A)');
    cy.wait(2000);
 });


  it('Filter with Price (Low to high)', () => {
    cy.visit('/')
    access.Validlogin();
    cy.get('.select_container').should("be.visible").click();
    cy.get('.product_sort_container').select('Price (low to high)');
 });

 it('Filter with Price (high to low)', () => {
    cy.visit('/')
    access.Validlogin();
    cy.get('.select_container').should("be.visible").click();
    cy.get('.product_sort_container').select('Price (high to low)');
 });
});