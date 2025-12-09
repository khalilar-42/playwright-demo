const BaseSteps = require("./BaseSteps");

class LoginSteps extends BaseSteps {
  constructor(page) {
    super(page);

    this.elements = {
      emailInput: page.locator("#input_email"),
      passwordInput: page.locator("#input_password"),
      continueButton: page.locator("#auth-email-cta-continue"),
      submitButton: page.locator("#signin-continue"),
      successIcon: page.locator("//html/body/div[1]/div/div[3]/div[2]/div/div/div/div[2]/form/div/div[2]/div/span"),
    };
  }

  async typeEmail(email) {
    await this.elements.emailInput.fill(email);
    await this.elements.emailInput.evaluate((element) => element.blur());
  }

  async typePassword(password) {
    await this.elements.passwordInput.fill(password);
  }

  async tapContinueButton() {
    await this.stableClick(this.elements.continueButton);
  }

  async tapSubmitButton() {
    await this.stableClick(this.elements.submitButton);
  }

  async performLogin(email, password) {
    await this.typeEmail(email);
    await this.tapContinueButton();
    await this.typePassword(password);
    await this.tapSubmitButton();
  }
}

module.exports = LoginSteps;
