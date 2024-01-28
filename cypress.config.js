const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter:'cypress-mochawesome-reporter', // for html reports
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin')(on);// html reports
    },
    // excludeSpecPattern: ['**/cypress/e2e/1-getting-started','**/cypress/e2e/2-advanced-examples'],
    // baseUrl: 'http://44.201.208.172/',
  },
});
