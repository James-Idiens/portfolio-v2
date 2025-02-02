import { test as base } from '@playwright/test';
import { HomePageSteps } from '../steps/HomePageSteps';

export interface StepsFixtures {
	homePageSteps: HomePageSteps;
}

export const test = base.extend<StepsFixtures>({
	homePageSteps: async ({ page }, use) => {
		await use(new HomePageSteps(page));
	}
});
