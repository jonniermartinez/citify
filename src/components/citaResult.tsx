import React from "react";
import { Button } from "./ui/button";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Toaster, toast } from "sonner";
// import { useTranslations } from "next-intl";

interface Props {
  cite: string;
}
export default function CitaResult({ cite }: Props) {
  const cita = cite;

  return (
    <>
      <Toaster position="top-center" richColors />
      <div className=" mx-auto w-72 md:w-full flex justify-center">
        <div className="absolute mx-auto -translate-y-2/4 rounded-xl bg-navy-blue-12 px-2	py-1 text-xs font-semibold text-white bg-primary">
          Recently cited
        </div>
        <div className="w-full overflow-hidden rounded-xl border border-navy-blue-6 shadow-sm">
          <div className="space-y-6 p-6">
            <div className="font-serif">
              <p>{cita}</p>
            </div>
            <CopyToClipboard text={cita}>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  toast.success("citiation copied corretly");
                }}
              >
                Copy to clipboard
              </Button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </>
  );
}
