const BaseSteps = require("./BaseSteps");

class LandingSteps extends BaseSteps {
  constructor(page) {
    super(page);

    this.elements = {
      loginButton: page.locator("#button_login"),
    };
  }

  async tapOnLoginButton() {
    return this.elements.loginButton.click();
  }
}

module.exports = LandingSteps;
