const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");
import homePage from "../../pages/home.POM";
import registerPage from "../../pages/register.pom";

Given("You open the register page", () => {
  homePage.footer.registerButton().click();
});

When("You select {string} as the gender", (gender) => {
  registerPage.selectGender(gender);
});

When("You enter {string} as the first name", (firstName) => {
  registerPage.firstNameField().type(firstName);
});

When("You enter {string} as the last name", (lastName) => {
  registerPage.lastNameField().type(lastName);
});

When("You enter {string} as the birthDate", (fullBirthDate) => {
  const birthDate_day = fullBirthDate.split("-")[0];
  const birthDate_month = fullBirthDate.split("-")[1];
  const birthDate_year = fullBirthDate.split("-")[2];

  registerPage.dateOfBirth.day().select(birthDate_day);
  registerPage.dateOfBirth.month().select(birthDate_month);
  registerPage.dateOfBirth.year().select(birthDate_year);
});

When("You enter a valid email", () => {
  cy.readFile('cypress/fixtures/data.json').then((content)=>{
    registerPage.emailField().type(content.email);
  })
});

When("You enter {string} as the company name", (companyName) => {
  registerPage.companyField().type(companyName);
});

When("You enter a valid password", () => {
  cy.readFile('cypress/fixtures/data.json').then((content)=>{
    registerPage.passwordField().type(content.password);
  })
});

When("You re-enter the password in the password confirmation", () => {
  cy.readFile('cypress/fixtures/data.json').then((content)=>{
    registerPage.confirmPasswordField().type(content.password);
  })
});

When("You click on register button", () => {
  registerPage.registerButton().click();
});

Then(
  "You should be registered successfully and {string} message should appear",
  (successMessage) => {
    registerPage
      .successRegistrationMessage()
      .should("have.text", successMessage);
  }
);

When("You enter an already registered email", () => {
  cy.readFile('cypress/fixtures/data.json').then((content)=>{
    registerPage.emailField().type(content.email);
  })
});

Then("Error message appears containing that {string}", (errorMessage) => {
  registerPage.emailExistsError().should("contain.text", errorMessage);
});
