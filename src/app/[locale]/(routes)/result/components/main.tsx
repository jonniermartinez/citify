"use client";

import CitaResult from "@/components/citaResult";
import Image from "next/image";
import useCitiation from "@/hooks/citiation-state";
// import { useRouter } from "next/navigation";

interface MainResultProps {
  tittle: string;
  subtitle: string;
}

function MainResult({ tittle, subtitle }: MainResultProps) {
  const citiation = useCitiation();
  // const router = useRouter();

  // if (!citiation.url) {
  //   router.push(`/`);
  // }

  return (
    <div className=" text-center mx-2">
      <h3 className="scroll-m-20 mb-10 md:text-5xl text-3xl font-bold ">
        {tittle}
      </h3>
      <section className="mb-10 mx-auto max-w-xl mx-a">
        <CitaResult cite={citiation.citiation_result}></CitaResult>
      </section>

      <section className="md:mb-14">
        <h4 className="scroll-m-20 pb-5 md:text-3xl text-xl font-semibold ">
          {subtitle}.
        </h4>
        <p className="pb-5">{citiation.info}</p>
        <div className="flex flex-wrap justify-between md:gap-8 gap-5 items-center content-center md:mt-14">
          <Image
            className=" w-full md:h-56 "
            src={citiation.anatomic}
            alt="anatomia large"
          />
          <Image
            className=" w-full md:h-56 "
            src={citiation.textual_anatomic}
            alt="anatomia large"
          />
        </div>
      </section>
    </div>
  );
}

export default MainResult;
