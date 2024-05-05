import Main from "@/app/[locale]/components/main";
import cursor from "@/assets/cursos.svg";
import apaImage from "@/assets/apa.png"
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");

  const classes = {
    container: cn("max-w-2xl text-center mx-auto"),
    title: cn(
      "max-w-xl relative text-center mx-auto",
      "font-display text-4xl font-extrabold leading-[1.15] text-black",
      "sm:text-6xl sm:leading-[1.15]",
      "bg-gradient-to-r from-violet-800 via-fuchsia-800 to-rose-400 bg-clip-text text-transparent"
    ),
    imageCursor: cn(
      "absolute translate-x-[80vw] md:translate-x-[48vw] md:translate-y-[60px] translate-y-[100px] -rotate-90"
    ),
  };

  return (
    <>
      <h1 data-testid="hero-text" className={classes.title}>
        {t("title")}
      </h1>
      <section className={classes.container}>
        <div className={classes.imageCursor}>
          <Image src={cursor} alt={"sdsadas"}></Image>
        </div>
        <Main generate={t("button-call-to-action")}></Main>
      </section>
      {/* <section>
        <Image width={200} height={200} src={apaImage} alt="" />
      </section> */}
    </>
  );
}
