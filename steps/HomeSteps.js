const BaseSteps = require("./BaseSteps");
const { expect } = require("@playwright/test");

class HomeSteps extends BaseSteps {
  constructor(page) {
    super(page);

    this.elements = {
      manageTopicButton: page.locator("#manage-topics-button"),
      homeSideButton: page.locator('//div[@id="sidebar-mandatory-item_header.buttonHome_0"]'),
      searchSideButton: page.locator('//div[@id="sidebar-mandatory-item_search.title_1"]'),
      librarySideButton: page.locator('//div[@id="sidebar-mandatory-item_header.library_2"]'),
      newsstandSideButton: page.locator('//div[@id="sidebar-mandatory-item_newsstand.bloc.articlesLive.navCat_3"]'),
      catalogSideButton: page.locator('//div[@id="sidebar-mandatory-item_footer.catalog_4"]'),
      welcomeDiscoverText: page.locator("#welcome-discover"),
    };
  }

  async assertHomePageIsPresent() {
    await expect(this.elements.manageTopicButton).toBeVisible();
    await expect(this.elements.homeSideButton).toBeVisible();
    await expect(this.elements.searchSideButton).toBeVisible();
    await expect(this.elements.librarySideButton).toBeVisible();
    await expect(this.elements.newsstandSideButton).toBeVisible();
    await expect(this.elements.catalogSideButton).toBeVisible();
  }

  async tapOnDiscoverWelcomeText() {
    await this.elements.welcomeDiscoverText.click();
  }
}

module.exports = HomeSteps;
