"use client"

import { useState } from 'react'

import { Input } from './ui/input'
import { Button } from './ui/button'
import CitaResult from './citaResult'
import { Label } from './ui/label'
import { useTranslations } from 'next-intl';
import { useToast } from "@/components/ui/use-toast"


// NO OLVIDAD ANADIR LOS TRAKINGS EVENTS PARA PRODUCION
// import { MixpanelTraking } from '@/services/mixpanel'
const mainDomain = process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000";

function Main() {
    const [url, setUrl] = useState(String)
    const [pageTitle, setPageTitle] = useState(String);
    const [isloading, setIsLoading] = useState<Boolean>(false);

    const { toast } = useToast();

    // translations
    const translation = useTranslations('Index')

    const handleClick = async () => {
        setIsLoading(true)
        try {
            const res = await fetch(`${mainDomain}/api/getDownloads?url=${url}`);
            const pageInfo = await res.json();
            pageInfo.pageTitle == "" ? setPageTitle("") : setPageTitle(pageInfo.pageTitle);
            console.log(pageInfo)
        } catch (error) {
            console.error("Error:", error);
            setPageTitle("");
            onErrorUrl()
        } finally {
            setIsLoading(false);
        }
    }

    const onErrorUrl = () => {
        toast({ title: "URL Error", description: "please verify the url" })
    }

    return (
        <div className='w-full flex flex-col items-center justify-center mt-8'>
            <div className='max-w-md text-center'>
                <h1 data-testid="hero-text" className=" font-display text-4xl font-bold leading-[1.15] text-black sm:text-5xl sm:leading-[1.15]">
                    <span className="bg-gradient-to-r from-violet-800 via-fuchsia-800 to-rose-400 bg-clip-text text-transparent">{translation("title")}</span>
                </h1>
                <div className='flex flex-col gap-6 mt-8'>
                    <div className='flex flex-col gap-2 items-start'>
                        <Label className="">{translation("cite_label")}</Label>
                        <Input
                            placeholder='https://es.wikipedia.org/wiki/Dante_Alighieri'
                            onChange={(e) => setUrl(e.target.value)}
                        >
                        </Input>
                    </div>
                    <Button onClick={() => handleClick()}>{translation("cite_botton")}</Button>
                </div>
            </div>
            {
                isloading ? <p>Loading ...</p> : <CitaResult pageTitle={pageTitle} url={url}></CitaResult>
            }
            {

            }
        </div>
    )
}

export default Main