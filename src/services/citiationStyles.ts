import { Citiatoin } from "@/lib/types";
import { Apa6daEdicion } from "./functions/apa6/apa6";

export type citiationStylesName = "APA 6th" | "APA 7th";

export type citiationStyles = (url: string, lang: string) => Promise<Citiatoin>;

export type ConverterFunctionsObject = {
  [key in citiationStylesName]: citiationStyles;
};

export const citiationStyles: ConverterFunctionsObject = {
  "APA 6th": (url: string, lang: string) => Apa6daEdicion(url, lang),
  "APA 7th": (url: string, lang: string) => Apa6daEdicion(url, lang),
};
