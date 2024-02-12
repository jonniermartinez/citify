import { Apa6daEdicion } from "./functions/apa";

export type citiationStylesName = "APA 6th" | "pascalse";

export type citiationStyles = (url: string, lang: string) => Promise<string>;

export type ConverterFunctionsObject = {
  [key in citiationStylesName]: citiationStyles;
};

export const citiationStyles: ConverterFunctionsObject = {
  "APA 6th": (url: string, lang: string) => Apa6daEdicion(url, lang),
  pascalse: (url: string) => Apa6daEdicion(url, "en"),
};
