// @ts-nocheck
const { test, expect } = require("../fixtures/pomFixture");
const accounts = require("../data/accounts.json");

test("Login with virgin account", async ({ baseSteps, loginSteps, landingSteps, homeSteps }) => {
  const { email, password } = accounts.virgin;
  await landingSteps.tapOnLoginButton();
  await loginSteps.performLogin(email, password);
  await homeSteps.assertHomePageIsPresent();
});

test("Login into subscribed account", async ({ baseSteps, homeSteps, loginSteps, landingSteps, multiProfileSteps }) => {
  const { email, password } = accounts.subscribed;
  await landingSteps.tapOnLoginButton();
  await loginSteps.performLogin(email, password);
  await multiProfileSteps.tapMainProfile();
  await homeSteps.tapOnDiscoverWelcomeText();
  await homeSteps.assertHomePageIsPresent();
});
