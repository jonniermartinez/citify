"use client";

import { useEffect, useState } from "react";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import CitaResult from "../../../components/citaResult";
import { Toaster, toast } from "sonner";
// import useCart from "@/hooks/citiation-state";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { citiationStyles } from "@/services/citiationStyle";
import type { citiationStylesName } from "@/services/citiationStyle";
import { useRouter, useParams } from "next/navigation";
import { cn } from "@/lib/utils";

function Main() {
  const router = useRouter();
  //const cart = useCart();
  // cart.addCitiation("jonnier");

  useEffect(() => {
    //console.log(cart.url);
  }, []);

  const [url, setUrl] = useState(String);
  const [cite, setCIte] = useState("");
  const [style, setStyle] = useState<citiationStylesName>();
  const [error, setError] = useState(false);

  const [isloading, setIsLoading] = useState<Boolean>(false);
  const params = useParams<{ locale: string }>();

  useEffect(() => {
    setError(false);
  }, [style, url]);

  const handleClick = async () => {
    // TODO: mejorar los mensajes de erro

    if (!style || !url) {
      toast.error("no pueden esta vacios");
      setError(true);
      return;
    }
    setIsLoading(true);
    const result = await citiationStyles[style](url, params.locale).finally(
      () => {
        setIsLoading(false);
      }
    );

    if (result.citiation_result == "Error generating citation") {
      toast.error("error please verify the url");
      setError(true);
      return;
    }
    // actualizar el estado de la cita actual
    // router.push(`${params.locale}/result`);
    setCIte(result.citiation_result);
  };

  const citiations = Object.keys(citiationStyles).map(
    (value: string): JSX.Element => {
      return (
        <SelectItem key={value} value={value}>
          {value}
        </SelectItem>
      );
    }
  );

  const handleStyleChage = async (value: citiationStylesName) => {
    console.log(value);
    setStyle(value);
  };

  return (
    <>
      <Toaster position="top-center" richColors />
      <div className="flex flex-col gap-6 mt-10 px-8">
        <div className="flex flex-col gap-2 items-start">
          {/* <Label className="">Cite a webpage</Label> */}
          <div className="w-full flex flex-wrap gap-3 justify-center rounded-sm ">
            <Select
              onValueChange={(v) => handleStyleChage(v as citiationStylesName)}
            >
              <SelectTrigger
                className={cn("w-fit", error && "border-red-600 text-red-600")}
              >
                <SelectValue className="" placeholder="Citiation Style" />
              </SelectTrigger>
              <SelectContent>{citiations}</SelectContent>
            </Select>
            <Input
              className={cn(
                "w-full max-w-xs",
                error && "border-red-600 text-red-600"
              )}
              placeholder="https://es.wikipedia.org/wiki/Dante_Alighieri"
              onChange={(e) => setUrl(e.target.value)}
            ></Input>
            <Button
              className="w-fit mx-auto "
              onClick={() => handleClick()}
              id="citegenerated"
            >
              Get cite
            </Button>
          </div>
        </div>
      </div>
      {cite ? (
        isloading ? (
          <p>Loading ...</p>
        ) : (
          <CitaResult cite={cite}></CitaResult>
        )
      ) : (
        <></>
      )}
    </>
  );
}

export default Main;
