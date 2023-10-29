class Login {
  emailField = () => {
    return cy.get("#Email");
  };
  passwordField = () => {
    return cy.get("#Password");
  };
  loginButton = () => {
    return cy.get('[class="button-1 login-button"]');
  };
  errorMessage = () => {
    return cy.get('[class="message-error validation-summary-errors"]');
  };
}

const loginPage = new Login();
export default loginPage;
