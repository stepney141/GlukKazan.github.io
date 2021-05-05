const puppeteer = require('puppeteer');

const url = process.argv[2];

(async () => {
  const browser = await puppeteer.launch({
    defaultViewport: {
      width: 600,
      height: 700,
    },
    headless: false,
  });
  try {
    const page = await browser.newPage();
    const mouse_click = async (x, y, time) => {
      try {
        await Promise.all([
          page.mouse.move(x, y),
          page.waitForTimeout(time),
          page.mouse.click(x, y)
        ]);
        return true;
      } catch (e) {
        const message = 'mouse_click_error:';
        console.logl(message + e);
        return false;
      }
    };
      
    await page.goto(url, { waitUntil: "networkidle2" });
      
    await mouse_click(260, 366, 10000);
    await mouse_click(167, 273, 10000);
      
    await mouse_click(260, 280, 10000);
    await mouse_click(260, 185, 10000);

    await mouse_click(163, 367, 10000);
    await mouse_click(260, 280, 10000);
      
    await page.waitForTimeout(10000);
      
  } catch (e) {
    console.log(e);
  } finally {
    await browser.close();
  }
    
});