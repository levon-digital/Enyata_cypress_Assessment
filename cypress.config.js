const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://checkout.koraapi.com/pay/QkPen8uAo893H1j',
    defaultCommandTimeout: 50000,
  
  pageLoadTimeout: 50000,
  },
});