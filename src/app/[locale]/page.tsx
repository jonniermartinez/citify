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
    container: cn("max-w-md text-center mx-auto"),
    title: cn(
      "relative",
      "font-display text-4xl font-extrabold leading-[1.15] text-black",
      "sm:text-5xl sm:leading-[1.15]",
      "bg-gradient-to-r from-violet-800 via-fuchsia-800 to-rose-400 bg-clip-text text-transparent"
    ),
    imageCursor: cn("absolute translate-x-[30vw] -rotate-90"),
  };

  return (
    <>
      <section className={classes.container}>
        <h1 data-testid="hero-text" className={classes.title}>
          Free APA Citation Generator
        </h1>
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
