
const access = require("./Validlogin.cy.js");
describe("logout flow", function () {
beforeEach(function () {
  });
  it('Filter with Z to A', () => {
    cy.visit('/')
    access.Validlogin();
    cy.get('#react-burger-menu-btn').click();
    cy.get('[data-test="logout-sidebar-link"]').click();

 });
});