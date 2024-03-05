import { JSDOM } from "jsdom";
import { getVideoDate } from "usetube";

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

    const getYoutubeVideoId =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(getYoutubeVideoId);
    const videoId = match && match[1];

    let publishedDate: string = "";

    if (videoId) {
      console.log("ID del video:", videoId);
      const getPublishedDate = await getVideoDate(videoId);
      const fecha = new Date(getPublishedDate);
      publishedDate = fecha.toDateString();
    }
    return {
      author: author,
      title: ogTitle,
      publishedDate: publishedDate,
    };
  } catch (error) {
    return {
      author: "",
      title: "",
      publishedDate: "",
    };
  }
}
