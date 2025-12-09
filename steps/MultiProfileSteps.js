const BaseSteps = require("./BaseSteps");

class MultiProfileSteps extends BaseSteps {
  constructor(page) {
    super(page);

    this.elements = {
      mainProfileText: page.getByText("QA-Auto-Web"),
    };
  }

  async tapMainProfile() {
    return this.elements.mainProfileText.click();
  }
}

module.exports = MultiProfileSteps;
