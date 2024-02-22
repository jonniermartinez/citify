import MainResult from "./components/main";
import { useTranslations } from "next-intl";

function Result() {
  const t = useTranslations("result");

  return (
    <>
      <MainResult tittle={t("title")} subtitle={t("subtitile")}></MainResult>
    </>
  );
}

export default Result;
