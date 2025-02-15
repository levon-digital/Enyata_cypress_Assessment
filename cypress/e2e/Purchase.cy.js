import {Purchase} from "/cypress/fixtures/selector.js";
import { faker } from '@faker-js/faker';
const access = require("./Validlogin.cy.js");
describe("Purchase Item Flow", function () {
beforeEach(function () {
  });
  it('Purchase Item form the Product page', () => {
    cy.visit('/')
    access.Validlogin();
    cy.get(Purchase.Itemname1).should("be.visible").should("have.text", "Sauce Labs Backpack")
    cy.get(Purchase.ItemAmount1).should("be.visible").should("have.text", "$29.99")
    cy.get(Purchase.Add_to_cart_button1).should("be.visible").click()
    cy.get(Purchase.Itemname2).should("be.visible").should("have.text", "Sauce Labs Bike Light")
    cy.get(Purchase.ItemAmount2).should("be.visible").should("have.text", "$9.99")
    cy.get(Purchase.Add_to_cart_button2).should("be.visible").click()
    //////Add to cart
    cy.get('[data-test="shopping-cart-link"]').should("be.visible").click()
    cy.get(Purchase.Cart_page_title).should("be.visible").should("have.text", "Your Cart")
    cy.get(Purchase.Amount_cartpage1).should("be.visible").should("have.text", "$29.99")
    cy.get(Purchase.Amount_cartpage2).should("be.visible").should("have.text", "$9.99")  
    cy.get(Purchase.QTY1).should("be.visible").should("have.text", "1")
    cy.get(Purchase.QTY2).should("be.visible").should("have.text", "1")  
    cy.get('[data-test="checkout"]').should("be.visible").click()
    ///////////// Checkout page
    cy.get(Purchase.checkout_informationpage).should("be.visible").should("have.text", "Checkout: Your Information")
    cy.get(Purchase.checkout_firstname).should("be.visible").type(faker.person.firstName());
    cy.get(Purchase.checkout_lastname).should("be.visible").type(faker.person.lastName());
    cy.get(Purchase.checkout_postalcode).should("be.visible").type(faker.address.zipCode());
    cy.get('[data-test="continue"]').should("be.visible").click()
    cy.get(Purchase.checkout_overviewPAGE).should("be.visible").should("have.text", "Checkout: Overview")
    cy.get('[data-test="subtotal-label"]').should("be.visible").should("have.text", "Item total: $39.98")
    cy.get('[data-test="tax-label"]').should("be.visible").should("have.text", "Tax: $3.20")
    cy.get('[data-test="total-label"]').should("be.visible").should("have.text", "Total: $43.18")
    cy.get('[data-test="finish"]').should("be.visible").click()
    cy.contains('Thank you for your order!').should("be.visible")
})

})