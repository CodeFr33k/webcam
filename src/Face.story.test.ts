const puppeteer = require('puppeteer');

it('renders correctly', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:6006/?path=/story/component--face');
    //await page.waitForSelector('.canvas', {visible: true})
    await page.waitFor(10000);
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
    await browser.close();
});

