const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    async setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      await addCucumberPreprocessorPlugin(on, config);

      on("file:preprocessor", preprocessor(config));

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
    baseUrl:'https://demo.nopcommerce.com/',
    specPattern: "cypress/e2e/**/*.{feature,cy.js,cy.ts}",
    excludeSpecPattern: ["**/utils/**"],
    supportFile: "cypress/support/e2e.{js,jsx,ts,tsx}",
    screenshotOnRunFailure: false,
    video:true,
    watchForFileChanges: false,
    defaultCommandTimeout:6000
  },
});
