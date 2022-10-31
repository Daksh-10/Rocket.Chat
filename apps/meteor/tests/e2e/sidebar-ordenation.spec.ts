import { test, expect } from './utils/test';
import { HomeChannel } from './page-objects';
import { createTargetChannel } from './utils';

test.use({ storageState: 'admin-session.json' });

test.describe.serial('sidebar', () => {
	let poHomeChannel: HomeChannel;
	let targetChannel: string;

	test.beforeAll(async ({ api }) => {
		targetChannel = await createTargetChannel(api);
	});

	test.beforeEach(async ({ page }) => {
		poHomeChannel = new HomeChannel(page);

		await page.goto('/home');
	});

	test('expect to sort the sidebar by Name', async ({ page }) => {
		await poHomeChannel.sidenav.openDisplayOptions();
		await poHomeChannel.sidenav.selectOrderByName();
	});
});
