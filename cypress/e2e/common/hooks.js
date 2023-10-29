import { Before } from "@badeball/cypress-cucumber-preprocessor";
import randomEmail from "random-email";
const generator = require("password-generator-js-tool");
Before({ tags: "@register" }, () => {
  const email = randomEmail({ domain: "test.com" });
  const password = generator.generatePassword(10);
  cy.writeFile("cypress/fixtures/data.json", { email, password });
});
Before({ tags: "not @admin" }, () => {
  cy.visit("/");
  cy.viewport(1920, 1080);
});
