const { Given, Then, When } = require("@badeball/cypress-cucumber-preprocessor");
import homePage from "../../pages/home.POM";

Then("The results should contain the entered {string}", (searchText) => {
  homePage.product.name().each((name) => {
    expect(name.text().toLocaleLowerCase()).to.contain(searchText);
  });
});