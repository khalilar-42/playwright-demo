class BaseSteps {
  constructor(page) {
    this.page = page;
  }

  async visit(path = "/") {
    await this.page.goto(path);
  }

  async pause() {
    await this.page.pause();
  }

  async stableClick(locator, timeout = 5000) {
    await locator.waitFor({ state: "visible", timeout });
    await this.page.waitForLoadState("networkidle");
    await locator.click({ trial: true });
    await locator.click();
  }
}

module.exports = BaseSteps;
