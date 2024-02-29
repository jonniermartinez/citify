import { JSDOM } from "jsdom";

interface ReturnData {
  author: string | null | undefined;
  title: string;
  publishedDate: string;
}

export async function getYotubeData(url: string): Promise<ReturnData> {
  try {
    const res = await fetch(url);
    const html = await res.text();

    const dom = new JSDOM(html);

    // Obtener el valor del atributo 'content' de la etiqueta <link>
    const itempropLinkElement = dom.window.document.querySelector(
      'link[itemprop="name"]'
    );
    const author = itempropLinkElement?.getAttribute("content");

    console.log("Content Value:", author);

    const ogTitleElement = dom.window.document.querySelector(
      'meta[property="og:title"]'
    );
    const ogTitle = ogTitleElement
      ? ogTitleElement.getAttribute("content") || ""
      : "";

    return {
      author: author,
      title: ogTitle,
      publishedDate: "string",
    };
  } catch (error) {
    return {
      author: "",
      title: "",
      publishedDate: "",
    };
  }
}
