class Register {
  selectGender = (gender) => {
    if (gender.toLocaleLowerCase() == "male") cy.get("#gender-male").click();
    else if (gender.toLocaleLowerCase() == "female")
      cy.get("#gender-female").click();
  };
  firstNameField = () => {
    return cy.get("#FirstName");
  };
  lastNameField = () => {
    return cy.get("#LastName");
  };
  dateOfBirth = {
    day: () => cy.get('[name="DateOfBirthDay"]'),
    month: () => cy.get('[name="DateOfBirthMonth"]'),
    year: () => cy.get('[name="DateOfBirthYear"]'),
  };
  emailField = () => {
    return cy.get("#Email");
  };
  companyField = () => {
    return cy.get("#Company");
  };
  passwordField = () => {
    return cy.get("#Password");
  };
  confirmPasswordField = () => {
    return cy.get("#ConfirmPassword");
  };
  registerButton = () => {
    return cy.get("#register-button");
  };
  successRegistrationMessage = () => {
    return cy.get(".page-body .result");
  };
  emailExistsError = () => {
    return cy.get('[class="message-error validation-summary-errors"]');
  };
}

const registerPage = new Register();
export default registerPage;
