import MainResult from "./components/main";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import useCitiation from "@/hooks/citiation-state";

function Result() {
  const t = useTranslations("result");
  const router = useRouter();
  const citiation = useCitiation();

  if (!citiation.url) {
    router.push(`/`);
  }

  return (
    <>
      <MainResult tittle={t("title")} subtitle={t("subtitile")}></MainResult>
    </>
  );
}

export default Result;
