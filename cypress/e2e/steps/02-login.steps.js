import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../../pages/home.POM";
import loginPage from "../../pages/login.pom";

Given("You open the login page", () => {
  homePage.footer.loginButton().click();
});

When("You enter a registered email", () => {
  cy.readFile("cypress/fixtures/data.json").then((content) => {
    loginPage.emailField().clear().type(content.email);
  });
});

When("You enter the password", () => {
  cy.readFile("cypress/fixtures/data.json").then((content) => {
    loginPage.passwordField().clear().type(content.password);
  });
});

When("You click on the login button", () => {
  loginPage.loginButton().click();
});

Then("You should be logged in successfully", () => {
  cy.url().should("not.contain", "login");
  homePage.footer.logoutButton().should("be.visible");
});

When("You enter a non registered email", () => {
  loginPage.emailField().type("test@email.com");
});

Then("Error message appears containing that {string}", (errorMessage) => {
  loginPage.errorMessage().should("contain.text", errorMessage);
});

When("You enter a wrong password", () => {
  loginPage.passwordField().type("testpass");
});

When("You click on logout button", () => {
  homePage.footer.logoutButton().click();
});

Then('You should be logged out successfully',()=>{
  homePage.footer.loginButton().should('be.visible')
})

Given('You open the admin portal',()=>{
  cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
})
