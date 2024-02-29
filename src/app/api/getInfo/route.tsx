import { extract } from "@extractus/article-extractor";
import { obtenerFechaEdicion } from "../helpers/get-wiki-date";
import {
  dateregex,
  wikipediaUrlPattern,
  youtubeUrlPattern,
} from "../helpers/regexs";
import { getYotubeData } from "../helpers/get-youtube-data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url: any = searchParams.get("url");

  try {
    const article = await extract(url);

    // wikipedia case
    if (wikipediaUrlPattern.test(url)) {
      const getDate = await obtenerFechaEdicion(url);
      const match = getDate?.match(dateregex);
      let lastmodifiedDate;

      if (match) {
        const fechaCompleta = match[2];
        lastmodifiedDate = fechaCompleta;
      }

      console.log(lastmodifiedDate);
      return Response.json({
        title: article?.title,
        url: article?.url,
        author: "Wikipedia contributors",
        source: article?.source,
        publishedDate: lastmodifiedDate,
      });
    }

    // TODO: youtube video.
    if (youtubeUrlPattern.test(url)) {
      const data = await getYotubeData(url);

      return Response.json({
        title: data.title,
        url: url,
        author: data.author,
        source: article?.source,
        publishedDate: data.publishedDate,
      });
    }

    // TODO: twiet case
    /* 
    TODO: spotify pocast  ---   https://www.enago.com/es/academy/citing-a-podcast/ 
        - apple pocast  
        - spotify postcast
    */

    let publishedDate;
    if (article?.published) {
      publishedDate = new Date(article.published).toLocaleDateString("en-US");
    }
    return Response.json({
      title: article?.title,
      url: article?.url,
      author: article?.author,
      source: article?.source,
      publishedDate: publishedDate,
    });
  } catch (err) {
    console.error(err);
  }
}
