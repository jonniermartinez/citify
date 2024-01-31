import Main from "@/components/main";
import { Toaster } from "@/components/ui/toaster";
import CitiationExamples from "@/components/citiationExamples";
import CitiationAnathomic from "@/components/citiationAnathomic";
import { useTranslations } from "next-intl";

// Kaplas
export default function Home() {
  const t = useTranslations("Index");
  return (
    <>
      {/* <p>{t("title")}</p> */}
      <Main></Main>
      <CitiationExamples></CitiationExamples>
      <Toaster></Toaster>
      <CitiationAnathomic></CitiationAnathomic>
    </>
  );
}
