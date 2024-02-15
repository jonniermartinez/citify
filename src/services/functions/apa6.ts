import { Citiatoin, ApaCitation } from "@/lib/types";

const mainDomain = process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000";

export async function Apa6daEdicion(
  url: string,
  lang: string
): Promise<Citiatoin> {
  const apaStyle = lang === "es" ? "APA 6 edeción" : "APA 6th edition";
  const anatomic = lang === "es" ? "" : "";
  const textual_anatomic = lang === "es" ? "" : "";
  const info =
    lang === "es" ? " Información en español" : "Información en ingles";

  const citiation_examples_en = ["", ""];
  const citiation_examples_es = ["", ""];

  const textual_citiation_examples_en = [""];
  const textual_citiation_examples_es = [""];
  const retrieved = lang === "es" ? "Recuperado de" : "Retrieved from";

  const citiation_examples =
    lang === "es" ? citiation_examples_es : citiation_examples_en;
  const textual_citiation_examples =
    lang === "es"
      ? textual_citiation_examples_es
      : textual_citiation_examples_en;

  try {
    const result = await fetch(`${mainDomain}/api/getInfo?url=${url}`);
    const data: ApaCitation | undefined = await result.json();

    if (data) {
      console.log(data);
      if (!data.title) {
        throw new Error("Data title is undefined");
      }
      const author = data.author ? data.author : data.source;
      let publishedDate;

      console.log("published date: ", data.publishedDate);
      if (data.publishedDate) {
        publishedDate = data.publishedDate;
        console.log(publishedDate);
      } else {
        lang === "es" ? (publishedDate = "s.f.") : (publishedDate = "n.d.");
      }

      const citiation_result = `${author}. ${publishedDate} ${data.title}. ${retrieved} ${url}`;
      const textual_citiation_result = `(Edition, 2024)`;
      return {
        apaStyle,
        info,
        url,
        textual_citiation_result,
        citiation_result,
        citiation_examples,
        textual_anatomic,
        textual_citiation_examples,
        anatomic,
      };
    } else {
      throw new Error("Data is undefined");
    }
  } catch (error) {
    console.error(error);
    return {
      apaStyle,
      info,
      url,
      textual_citiation_result: "Error generating citation",
      citiation_result: "Error generating citation",
      citiation_examples: [],
      textual_citiation_examples: [],
      textual_anatomic,
      anatomic,
    };
  }
}
export function Apa7maEdicion(input: string): string {
  return input;
}
