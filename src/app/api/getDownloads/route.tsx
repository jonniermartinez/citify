import cheerio from "cheerio";


export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const url: any = searchParams.get('url');

    // validar si es una url que empiese con https, o http, que termine en .somenthing


    const res = await fetch(url)

    const html = await res.text()

    const $ = cheerio.load(html);

    const pageTitle = $('title').text();
    console.log('Título de la página:', pageTitle);

    // const metaDescription = $('meta[name="description"]');
    const author = $('meta[name="author"]').text();
    const copyright = $('meta[name="copyright"]').text();
    console.log('Copyright (Metadata):', copyright);
    console.log('Author (Metadata):', author);


    return Response.json({ pageTitle: pageTitle });

}
