"use client";

import { useState } from "react";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import CitaResult from "../../../components/citaResult";
import { Label } from "../../../components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { citiationStyles } from "@/services/citiationStyle";
import type { citiationStylesName } from "@/services/citiationStyle";

import { useEffect } from "react";

// NO OLVIDAD ANADIR LOS TRAKINGS EVENTS PARA PRODUCION
// import { MixpanelTraking } from '@/services/mixpanel'
const mainDomain = process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000";

function Main() {
  const [url, setUrl] = useState(String);
  const [pageTitle, setPageTitle] = useState(String);
  const [pageAuthor, setPageAuthor] = useState(String);
  const [pageSource, setPageSource] = useState(String);
  const [pageUrl, setPageUrl] = useState(String);
  const [publishedDate, setPublishedDate] = useState(String);

  const [isloading, setIsLoading] = useState<Boolean>(false);

  const { toast } = useToast();

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${mainDomain}/api/getInfo?url=${url}`);
      const pageInfo = await res.json();
      pageInfo.title == "" ? setPageTitle("") : setPageTitle(pageInfo.title);
      pageInfo.url == "" ? setPageUrl("") : setPageUrl(pageInfo.url);
      pageInfo.author == ""
        ? setPageAuthor("")
        : setPageAuthor(pageInfo.author);
      pageInfo.source == ""
        ? setPageSource("")
        : setPageSource(pageInfo.source);
      pageInfo.publishedDate == ""
        ? setPublishedDate("")
        : setPublishedDate(pageInfo.publishedDate);
    } catch (error) {
      console.error("Error:", error);
      setPageTitle("");
      onErrorUrl();
    } finally {
      setIsLoading(false);
    }
  };

  const onErrorUrl = () => {
    toast({ title: "URL Error", description: "Please verify the URL" });
  };

  useEffect(() => {
    setPageTitle("");
  }, [url]);

  const citiations = Object.keys(citiationStyles).map(
    (value: string): JSX.Element => {
      return <SelectItem value={value}>{value}</SelectItem>;
    }
  );

  const handleStyleChage = (value: citiationStylesName) => {
    console.log(value);
    const result = citiationStyles[value]("Hello");
    console.log(result);
  };

  return (
    <>
      <div className="flex flex-col gap-6 mt-10 px-8">
        <div className="flex flex-col gap-2 items-start">
          {/* <Label className="">Cite a webpage</Label> */}
          <div className="w-full flex gap-3  rounded-sm ">
            <Select
              onValueChange={(v) => handleStyleChage(v as citiationStylesName)}
            >
              <SelectTrigger className="w-fit">
                <SelectValue placeholder="Citiation Style" />
              </SelectTrigger>
              <SelectContent>{citiations}</SelectContent>
            </Select>
            <Input
              className="w-[60%]"
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

      {/* <div className=" flex">
        <img
          src="https://ph-static.imgix.net/product-hunt-logo-horizontal-orange.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=max"
          alt=""
          className=" w-64 grayscale hover:grayscale-0 cursor-pointer mx-auto mt-20"
        />
        <img
          src="https://1000logos.net/wp-content/uploads/2017/05/Reddit-Logo-500x281.png"
          alt=""
          className=" w-64 grayscale hover:grayscale-0 cursor-pointer mx-auto mt-20"
        />
      </div> */}

      {isloading ? (
        <p>Loading ...</p>
      ) : (
        <CitaResult
          publishedDate={publishedDate}
          author={pageAuthor}
          source={pageSource}
          pageTitle={pageTitle}
          url={pageUrl}
        ></CitaResult>
      )}
    </>
  );
}

export default Main;
