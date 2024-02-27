import MainResult from "./components/main";
import { useTranslations } from "next-intl";
import useCitiation from "@/hooks/citiation-state";

function Result() {
  const t = useTranslations("result");
  const citiation = useCitiation();

  if (!citiation.url) {
    return <>404</>;
  }

  return (
    <>
      <MainResult tittle={t("title")} subtitle={t("subtitile")}></MainResult>
    </>
  );
}

export default Result;
