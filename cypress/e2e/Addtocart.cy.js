import {Add_to_cart} from "/cypress/fixtures/selector.js";
import { faker } from '@faker-js/faker';
const access = require("./Validlogin.cy.js");
describe("Add to Cart Flow", function () {
beforeEach(function () {
  });
  it('Add Item to cart', () => {
    cy.visit('/')
    access.Validlogin();
    cy.get(Add_to_cart.Itemname1).should("be.visible").should("have.text", "Sauce Labs Backpack")
    cy.get(Add_to_cart.ItemAmount1).should("be.visible").should("have.text", "$29.99")
    cy.get(Add_to_cart.Add_to_cart_button1).should("be.visible").click()
    cy.get(Add_to_cart.Itemname2).should("be.visible").should("have.text", "Sauce Labs Bike Light")
    cy.get(Add_to_cart.ItemAmount2).should("be.visible").should("have.text", "$9.99")
    cy.get(Add_to_cart.Add_to_cart_button2).should("be.visible").click()
    //////Add to cart
    cy.get('[data-test="shopping-cart-link"]').should("be.visible").click()
    cy.get(Add_to_cart.Cart_page_title).should("be.visible").should("have.text", "Your Cart")
    cy.get(Add_to_cart.Amount_cartpage1).should("be.visible").should("have.text", "$29.99")
    cy.get(Add_to_cart.Amount_cartpage2).should("be.visible").should("have.text", "$9.99")  
    cy.get(Add_to_cart.QTY1).should("be.visible").should("have.text", "1")
    cy.get(Add_to_cart.QTY2).should("be.visible").should("have.text", "1")  
    cy.get('[data-test="checkout"]').should("be.visible").click()
    /////////////
})

})