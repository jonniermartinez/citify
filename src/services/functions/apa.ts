interface ApaCitation {
  title: string;
  author: string;
  source: string;
  publishedDate: string;
  url: string;
}
const mainDomain = process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000";

export async function Apa6daEdicion(
  url: string,
  lang: string
): Promise<string> {
  // AUTOR. (2024, 24 enero). PAGETITLE. Recuperado de URL
  const retrieved = lang === "es" ? "Recuperado de" : "Retrieved from";
  try {
    const result = await fetch(`${mainDomain}/api/getInfo?url=${url}`);
    const data: ApaCitation | undefined = await result.json();

    if (data) {
      if (!data.title) {
        throw new Error("Data title is undefined");
      }
      const author = data.author ? data.author : data.source;
      const publishedDate = data.publishedDate
        ? `(${data.publishedDate}).`
        : "";

      const citation = `${author}. ${publishedDate} ${data.title}. ${retrieved} ${url}`;
      return citation;
    } else {
      throw new Error("Data is undefined");
    }
  } catch (error) {
    console.error(error);
    return "error";
  }
}
export function Apa7maEdicion(input: string): string {
  return input;
}
