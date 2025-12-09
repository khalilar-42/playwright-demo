// fixtures/pomFixture.js
const { test: base, expect } = require("@playwright/test");
const LoginSteps = require("../steps/loginSteps");
const LandingSteps = require("../steps/LandingSteps");
const HomeSteps = require("../steps/HomeSteps");
const BaseSteps = require("../steps/BaseSteps");
const MultiProfileSteps = require("../steps/MultiProfileSteps");

const test = base.extend({
  baseSteps: async ({ page, baseURL }, use) => {
    const steps = new BaseSteps(page);
    await steps.visit(baseURL);
    await use(steps);
  },

  loginSteps: async ({ page }, use) => {
    await use(new LoginSteps(page));
  },

  landingSteps: async ({ page }, use) => {
    await use(new LandingSteps(page));
  },

  homeSteps: async ({ page }, use) => {
    await use(new HomeSteps(page));
  },

  multiProfileSteps: async ({ page }, use) => {
    await use(new MultiProfileSteps(page));
  },
});

module.exports = {
  test,
  expect: expect,
};
