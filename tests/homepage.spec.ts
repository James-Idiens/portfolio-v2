import { expect } from '@playwright/test';
import { test } from '../playwright/fixtures/fixture';

test('it will click the enter button and display homepage', async ({ homePage, homePageSteps }) => {
    await homePageSteps.clickEnterButton();
    // using regex here due to the way I have the text split up
    await expect(homePage.heroText).toContainText(/Are\s+You\s+Hiring\s+\?/);
});
