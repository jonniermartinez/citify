"use client";

import useCitiation from "@/hooks/citiation-state";
import CitaResult from "@/components/citaResult";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface MainResultProps {
  tittle: string;
  subtitle: string;
}

function MainResult({ tittle, subtitle }: MainResultProps) {
  const citiation = useCitiation();
  const router = useRouter();

  if (!citiation.url) {
    router.push(`/`);
  }

  return (
    <div className=" text-center  ">
      <h3 className="scroll-m-20 mb-10 text-5xl font-bold ">{tittle}</h3>
      <section className="mb-10 mx-auto max-w-xl">
        <CitaResult cite={citiation.citiation_result}></CitaResult>
      </section>

      <section className="mb-14">
        <h4 className="scroll-m-20 pb-5 text-3xl font-semibold ">{subtitle}</h4>
        <p className="pb-5">{citiation.info}</p>
        <div className="flex flex-wrap justify-between gap-5 items-center content-center">
          <Image
            className=" w-full h-56 bg-slate-700"
            src={citiation.anatomic}
            alt="anatomia large"
          />
          <Image
            className=" w-full h-56 bg-slate-700"
            src={citiation.textual_anatomic}
            alt="anatomia large"
          />
        </div>
      </section>
    </div>
  );
}

export default MainResult;
