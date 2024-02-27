import puppeteer from "puppeteer";

export async function obtenerFechaEdicion(url: string) {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
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
