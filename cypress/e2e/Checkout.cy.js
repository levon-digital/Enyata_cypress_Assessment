import {Checkout} from "/cypress/fixtures/selector.js";
import { faker } from '@faker-js/faker';
describe('User Making payment with Card', () => {
  it('User Making payment with insufficient funds (card)', () => {
    cy.visit('/')
    cy.get(Checkout.fullNamefield).should("be.visible").type(faker.person.fullName());
    cy.get(Checkout.emailaddressfield).should("be.visible").type(faker.internet.email());
    cy.get(Checkout.Amountfield).should("be.visible").type(Checkout.Amountdata);
    cy.get(Checkout.proceedbutton).should("be.visible").click();
    cy.get(Checkout.Paywithdebitcard).should("be.visible").click();
    /////provide Insufficient funds card details
    cy.get(Checkout.Paymentmodalamount).should("be.visible").should("have.text", "Pay NGN 10,000.00")
    cy.get(Checkout.cardnumberfield).should("be.visible").type(Checkout.lowfundsCardNumber);
    cy.get(Checkout.Expdatefield).should("be.visible").type(Checkout.lowfundExpirydate)
    cy.get(Checkout.CVVfield).should("be.visible").type(Checkout.lowfundsCVV)
    cy.get(Checkout.Paybutton).should("be.visible").click()
    cy.get(Checkout.errormessagemodal).should("be.visible").should("have.text","Invalid request data")
})

it('User Making payment with sufficient funds (card)', () => {
  cy.visit('/')
  cy.get(Checkout.fullNamefield).should("be.visible").type(faker.person.fullName());
  cy.get(Checkout.emailaddressfield).should("be.visible").type(faker.internet.email());
  cy.get(Checkout.Amountfield).should("be.visible").type(Checkout.Amountdata);
  cy.get(Checkout.proceedbutton).should("be.visible").click();
  cy.get(Checkout.Paywithdebitcard).should("be.visible").click();
  /////provide sufficient funds card details
  cy.get(Checkout.Paymentmodalamount).should("be.visible").should("have.text", "Pay NGN 10,000.00")
  cy.get(Checkout.cardnumberfield).should("be.visible").type(Checkout.fundedCardNumber);
  cy.get(Checkout.Expdatefield).should("be.visible").type(Checkout.fundedExpirydate)
  cy.get(Checkout.CVVfield).should("be.visible").type(Checkout.fundedCVV)
  cy.get(Checkout.Paybutton).should("be.visible").click()
  cy.get(Checkout.Pinfield1).should("be.visible").type(Checkout.fundedPIN1)
  cy.get(Checkout.Pinfield2).should("be.visible").type(Checkout.fundedPIN2)
  cy.get(Checkout.Pinfield3).should("be.visible").type(Checkout.fundedPIN3)
  cy.get(Checkout.Pinfield4).should("be.visible").type(Checkout.fundedPIN4)
  cy.get('#card-otp').should("be.visible").type(Checkout.fundedOTP)
  cy.get('.kpy-col-btn').click()
  cy.contains('Awesome! Your payment was successful.').should('be.visible')


})


})