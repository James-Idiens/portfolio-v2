import type { Locator, Page } from '@playwright/test';

export class HomePage {
    readonly enterButton: Locator;
    readonly heroText: Locator;
 /**
     * Creates an instance of HomePage.
     * @param {Page} page - The Playwright Page object.
     */

    constructor(page: Page) {
        this.enterButton = page.getByTestId('enter-button');
        this.heroText = page.getByTestId('hero-text');
    }


}