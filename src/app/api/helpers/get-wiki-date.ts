import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium-min";

export async function obtenerFechaEdicion(url: string) {
  // Or use
  const chromiumPack =
    "https://github.com/Sparticuz/chromium/releases/download/v121.0.0/chromium-v121.0.0-pack.tar";
  const browser = await puppeteer.launch({
    args: chromium.args,
    // See https://www.npmjs.com/package/@sparticuz/chromium#running-locally--headlessheadful-mode for local executable path
    executablePath: await chromium.executablePath(chromiumPack),
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: "domcontentloaded",
  });

  await page.waitForSelector("#footer-info-lastmod");
  const info = await page.evaluate(() => {
    const data = document.getElementById("footer-info-lastmod");
    return data?.innerHTML;
  });
  console.log(info);

  // Cerrar el navegador
  await browser.close();
  return info;
}
