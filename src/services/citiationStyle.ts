import { camelCase } from "./functions/camelcase";

export type citiationStylesName = "camelcase" | "pascalse";

export type citiationStyles = (input: string) => string;

export type ConverterFunctionsObject = {
  [key in citiationStylesName]: citiationStyles;
};

export const citiationStyles: ConverterFunctionsObject = {
  camelcase: (input: string) => camelCase(input),
  pascalse: (input: string) => camelCase(input),
};
