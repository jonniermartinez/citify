"use client";

import useCitiation from "@/hooks/citiation-state";
import CitaResult from "@/components/citaResult";

function Result() {
  const citiation = useCitiation();

  return (
    <div className=" text-center  ">
      <h3 className="scroll-m-20 mb-10 text-5xl font-bold ">
        Tu cita se ha generado correctamete
      </h3>
      <section className="mb-10 mx-auto max-w-xl">
        <CitaResult cite={citiation.citiation_result}></CitaResult>
      </section>

      <section className="mb-14">
        <h4 className="scroll-m-20 pb-5 text-3xl font-semibold ">
          Anatomia del formato
        </h4>
        <p className="pb-5">
          {citiation.info}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          sequi deserunt quo et error!
        </p>
        <div className="flex justify-between gap-5 items-center content-center">
          <img
            className=" w-full h-56 bg-slate-700"
            src={citiation.anatomic}
            alt="anatomia large"
          />
        </div>
      </section>
      <section className="mb-16">
        <h4 className="scroll-m-20 pb-5 text-3xl font-semibold ">Ejemplos</h4>
        <div className="flex flex-wrap justify-between content-center items-center gap-5">
          <img
            className=" w-96 h-96 bg-slate-700"
            src={citiation.citiation_examples[0]}
            alt="example 1"
          />
          <img
            className="w-96 h-96 bg-slate-700"
            src={citiation.citiation_examples[1]}
            alt="example 2"
          />
          <img
            className="w-96 h-96 bg-slate-700"
            src={citiation.textual_citiation_examples[1]}
            alt="example 3"
          />
        </div>
      </section>
      <section className="mb-16">
        <h4 className="scroll-m-20 pb-2 text-3xl font-semibold ">
          Suscribete a mi newsletter
        </h4>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </section>
    </div>
  );
}

export default Result;
