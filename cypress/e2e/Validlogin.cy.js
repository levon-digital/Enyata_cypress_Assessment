import {Login} from "/cypress/fixtures/selector.js";

  export const Validlogin = () => {
    
    cy.get(Login.usernamefield).should("be.visible").type('standard_user');
    cy.get(Login.passwordfield).should("be.visible").type('secret_sauce');
    cy.get(Login.loginbutton).should("be.visible").click()

    }