"use client";

import useCitiation from "@/hooks/citiation-state";
import CitaResult from "@/components/citaResult";

function Result() {
  const citiation = useCitiation();

  return (
    <div className=" text-center">
      <h3 className="scroll-m-20 mb-16 text-5xl font-bold ">
        Tu cita se ha generado correctamete
      </h3>
      <section className="mb-16 max-w-xl mx-auto">
        <CitaResult cite={citiation.citiation_result}></CitaResult>
      </section>
      <section className="mb-16">
        <h4 className="scroll-m-20  text-3xl font-semibold ">Cita textual</h4>
        <div>((Smith, 2010))</div>
      </section>
      <section className="mb-16">
        <h4 className="scroll-m-20 pb-2 text-3xl font-semibold ">
          Anatomia del formato
        </h4>
        <img src="" alt="" />
        <p>Formato cita textual</p>
        <img src="" alt="" />
      </section>
      <section className="mb-16">
        <h4 className="scroll-m-20 pb-2 text-3xl font-semibold ">Ejemplos</h4>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
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
