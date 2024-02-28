import { JSDOM } from "jsdom";

export async function obtenerFechaEdicion(url: string) {
  try {
    const res = await fetch(url);
    const html = await res.text();

    const dom = new JSDOM(html);

    // Assuming there's only one element with the class "footer-info-lastmod"
    const lastModifiedDateElement = dom.window.document.querySelector(
      ".mw-footer-container"
    );

    if (lastModifiedDateElement) {
      const lastEdit = lastModifiedDateElement.textContent;
      console.log(lastEdit);
      return lastEdit;
    }
  } catch (error) {
    return "Error fetching or parsing the HTML:";
  }
}
