import { Citiatoin, ApaCitation } from "@/lib/types";

const mainDomain = process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000";

import anatomicImageEN from "./assets/AnatomiaAPA6 (english).svg";
import anatomicTextualImageEN from "./assets/Anatomia APA 6 textual (english).svg";

import anatomicImageES from "./assets/1 (esp).svg";
import anatomicTextualImageES from "./assets/2 (esp).svg";

export async function Apa6daEdicion(
  url: string,
  lang: string
): Promise<Citiatoin> {
  const apaStyle = lang === "es" ? "APA 6 edeción" : "APA 6th edition";
  const anatomic = lang === "es" ? anatomicImageES : anatomicImageEN;
  const textual_anatomic =
    lang === "es" ? anatomicTextualImageES : anatomicTextualImageEN;
  const info =
    lang === "es"
      ? "Estos ejemplos ilustran la estructura de una cita APA tanto en formato largo como corto de la versión 6."
      : "These examples illustrate the structure of an APA citation in both the long and short formats of version 6.";

  const retrieved = lang === "es" ? "Recuperado de" : "Retrieved from";

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
        textual_anatomic,
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
      textual_anatomic,
      anatomic,
    };
  }
}
