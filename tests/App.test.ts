import { chromium } from 'playwright';

describe('HelloReact', () => {
    let browser, page;

    beforeAll(async () => {
        browser = await chromium.launch();
    });

    afterAll(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        page = await browser.newPage();
        await page.goto('http://localhost:5173');
    });

    afterEach(async () => {
        await page.close();
    });

    it('renders the text and button', async () => {
        // Check that the "Hello React" text is visible and contains the correct text
        const helloReactText = await page.$('h1');
        expect(helloReactText).not.toBeNull();
        expect(await helloReactText.innerText()).toBe('Hello React');

        // Check that the button is visible and contains the correct text
        const toggleButton = await page.$('button');
        expect(toggleButton).not.toBeNull();
        expect(await toggleButton.innerText()).toBe('Toggle Text');

        // Click the button and check that the text toggles
        await toggleButton.click();
        expect(await helloReactText.isVisible()).toBe(false);

        await toggleButton.click();
        expect(await helloReactText.isVisible()).toBe(true);
    });
});
