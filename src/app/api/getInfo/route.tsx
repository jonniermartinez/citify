import { extract } from "@extractus/article-extractor";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url: any = searchParams.get("url");

  // TODO: Si es un link de youtubute hacer scraping

  // here we use top-level await, assume current platform supports it
  try {
    const article = await extract(url);

    return Response.json({
      title: article?.title,
      url: article?.url,
      author: article?.author,
      source: article?.source,
      publishedDate: article?.published,
    });
  } catch (err) {
    console.error(err);
  }
}
