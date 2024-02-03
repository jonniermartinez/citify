"use client";

import { useState } from "react";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import CitaResult from "../../../components/citaResult";
import { Label } from "../../../components/ui/label";
import { useToast } from "@/components/ui/use-toast";

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

  return (
    <>
      <div className="flex flex-col gap-6 mt-10 px-8">
        <div className="flex flex-col gap-2 items-start">
          <Label className="">Cite a webpage</Label>
          <Input
            placeholder="https://es.wikipedia.org/wiki/Dante_Alighieri"
            onChange={(e) => setUrl(e.target.value)}
          ></Input>
        </div>
        <Button onClick={() => handleClick()} id="citegenerated">
          Generate APA reference
        </Button>
      </div>

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
