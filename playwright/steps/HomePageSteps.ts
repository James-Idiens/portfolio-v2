import type { Page } from '@playwright/test';
import { HomePage } from '../page-objects/homePage';

export class HomePageSteps {
    private readonly homePage: HomePage;
    private readonly page: Page;

    /**
     * Creates an instance of HomePageSteps.
     * @param {Page} page - The Playwright Page object.
     */
    constructor(page: Page) {
        this.homePage = new HomePage(page);
        this.page = page;
    }

    /**
     * Clicks the enter button on the homepage.
     */
    async clickEnterButton() {
        await this.page.goto(process.env.APP_BASE || 'http://localhost:5173');
        await this.homePage.enterButton.click();
    }
}