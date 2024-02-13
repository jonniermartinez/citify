"use client";

import useCitiation from "@/hooks/citiation-state";
import CitaResult from "@/components/citaResult";

function Result() {
  const citiation = useCitiation();

  return (
    <div>
      <CitaResult cite={citiation.citiation_result}></CitaResult>
    </div>
  );
}

export default Result;
