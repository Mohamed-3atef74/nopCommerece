import { Given } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../pages/login.pom";
import homePage from "../../pages/home.POM";

Given("User is logged in", () => {
  homePage.footer.loginButton().click();
  cy.readFile("cypress/fixtures/data.json").then((content) => {
    loginPage.emailField().clear().type(content.email);
    loginPage.passwordField().clear().type(content.password);
  });
  loginPage.loginButton().click();
  cy.url().should("not.contain", "login");
});

Given("User searches for {string} and view the results", (searchText) => {
  homePage.search.box().type(searchText);
  homePage.search.button().click();
});
