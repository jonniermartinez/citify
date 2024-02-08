import React from "react";
import { Button } from "./ui/button";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useToast } from "@/components/ui/use-toast";

interface Props {
  pageTitle: string;
  url: string;
  author: string;
  source: string;
  publishedDate: string;
}

// TODO: Solo recibira la en texto plano la armaré en la funciones correspondientes
export default function CitaResult({
  pageTitle,
  url,
  author,
  source,
  publishedDate,
}: Props) {
  console.log(source);

  const now = new Date();
  const day = now.getDay(); // returns a number representing the day of the week, starting with 0 for Sunday
  const month = now.getMonth();
  const year = now.getFullYear();

  const { toast } = useToast();

  const cita = `${
    author === "" ? author : `${author}.`
  } ${publishedDate} ${pageTitle} - Retrieved ${day}/${month}/${year} from `;

  if (pageTitle != undefined) {
    if (pageTitle.length == 0) {
      return <></>;
    } else {
      return (
        <div className="mt-16 w-72 md:w-full flex justify-center">
          <div className="absolute mx-auto -translate-y-2/4 rounded-xl bg-navy-blue-12 px-2	py-1 text-xs font-semibold text-white bg-primary">
            Recently cited
          </div>
          <div className="w-full overflow-hidden rounded-xl border border-navy-blue-6 shadow-sm">
            <div className="space-y-6 p-6">
              <div className="grow overflow-hidden">
                <h3 className="truncate text-sm font-semibold">{pageTitle}</h3>
                <div className="mt-6">
                  <a href={url} target="_blank">
                    <Button size="sm">Test url</Button>
                  </a>
                </div>
              </div>
              <div className="font-serif">
                <p>
                  {cita}
                  <span className="text-sky-800">{url}</span>
                </p>
              </div>
              <CopyToClipboard text={cita + url}>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    toast({
                      title: "Excellent",
                      description: "Copied to the clipboard successfully 🚀",
                    });
                  }}
                >
                  Copy to clipboard
                </Button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      );
    }
  }
}
