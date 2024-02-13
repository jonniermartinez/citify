import { create } from "zustand";
import { Citiatoin } from "@/lib/types";

interface CartStore extends Citiatoin {
  addCitiation(arg0: Citiatoin): unknown;
}

const useCitiation = create<CartStore>((set, get) => ({
  apaStyle: "",
  info: "",
  url: "",
  citiation_result: "",
  citiation_examples: [],
  textual_citiation_examples: [],
  textual_anatomic: "",
  anatomic: "",
  addCitiation: (data: Citiatoin) => {
    set({
      apaStyle: data.apaStyle,
      info: data.info,
      url: data.url,
      citiation_result: data.citiation_result,
      citiation_examples: data.citiation_examples,
      textual_anatomic: data.textual_anatomic,
      anatomic: data.anatomic,
    });
  },
}));

export default useCitiation;
