"use client";

import { useEffect, useState } from "react";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { Toaster, toast } from "sonner";
import useCitiation from "@/hooks/citiation-state";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { citiationStyles } from "@/services/citiationStyles";
import type { citiationStylesName } from "@/services/citiationStyles";
import { useRouter, useParams } from "next/navigation";
import { cn } from "@/lib/utils";

// TODO: rename the component name
export default function Main(): JSX.Element {
  const router = useRouter();
  const citiation = useCitiation();
  // TODO: implement global estate of an citiation

  const [url, setUrl] = useState(String);
  const [cite, setCIte] = useState(String);
  // TODO: add an deafult style
  const [style, setStyle] = useState<citiationStylesName>("APA 6th");
  const [error, setError] = useState(false);
  const [isloading, setIsLoading] = useState<Boolean>(false);

  const params = useParams<{ locale: string }>();

  useEffect(() => {
    setError(false);
  }, [style, url]);

  const handleClick = async () => {
    // TODO: Improve message errors
    if (!style || !url) {
      toast.error("no pueden esta vacios");
      setError(true);
      return;
    }
    setIsLoading(true);
    console.log(style);
    console.log(url);
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

    citiation.addCitiation({
      apaStyle: result.apaStyle,
      info: result.info,
      url: result.url,
      citiation_result: result.citiation_result,
      citiation_examples: result.citiation_examples,
      textual_citiation_examples: result.textual_citiation_examples,
      textual_anatomic: result.textual_anatomic,
      anatomic: result.anatomic,
    });

    setCIte(result.citiation_result);
    router.push(`${params.locale}/result`);
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

  // TODO: implement the classes sematic with cn utility
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
                <SelectValue className="" placeholder={style} />
              </SelectTrigger>
              <SelectContent>{citiations}</SelectContent>
            </Select>
            <Input
              className={cn(
                "w-full max-w-[370px]",
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
    </>
  );
}
