import Main from "@/app/[locale]/components/main";
import { Toaster } from "@/components/ui/toaster";
import CitiationExamples from "@/components/citiationExamples";
import CitiationAnathomic from "@/components/citiationAnathomic";
import { useTranslations } from "next-intl";
import cursor from "@/assets/cursos.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Home() {
  const t = useTranslations("Index");

  const classes = {
    container: cn("max-w-2xl text-center mx-auto"),
    title: cn(
      "max-w-md relative text-center mx-auto",
      "font-display text-4xl font-extrabold leading-[1.15] text-black",
      "sm:text-5xl sm:leading-[1.15]",
      "bg-gradient-to-r from-violet-800 via-fuchsia-800 to-rose-400 bg-clip-text text-transparent"
    ),
    imageCursor: cn(
      "absolute translate-x-[48vw] translate-y-[60px] -rotate-90"
    ),
  };

  return (
    <>
      <h1 data-testid="hero-text" className={classes.title}>
        Free APA Citation Generator
      </h1>
      <section className={classes.container}>
        <div className={classes.imageCursor}>
          <Image src={cursor} alt={""}></Image>
        </div>
        <Main></Main>
      </section>
      <section>
        <CitiationExamples></CitiationExamples>
      </section>
      <Toaster></Toaster>
      <CitiationAnathomic></CitiationAnathomic>
    </>
  );
}
