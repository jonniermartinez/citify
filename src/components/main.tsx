"use client"

import { useState } from 'react'

import { Input } from './ui/input'
import { Button } from './ui/button'
import CitaResult from './citaResult'
import { Label } from './ui/label'
import { useTranslations } from 'next-intl';
import { useToast } from "@/components/ui/use-toast"

import { useEffect } from 'react'


// NO OLVIDAD ANADIR LOS TRAKINGS EVENTS PARA PRODUCION
// import { MixpanelTraking } from '@/services/mixpanel'
const mainDomain = process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000";

function Main() {
    const [url, setUrl] = useState(String)
    const [pageTitle, setPageTitle] = useState(String);
    const [pageAuthor, setPageAuthor] = useState(String);
    const [pageSource, setPageSource] = useState(String);
    const [pageUrl, setPageUrl] = useState(String)

    const [isloading, setIsLoading] = useState<Boolean>(false);

    const { toast } = useToast();

    // translations
    const translation = useTranslations('Index')

    const handleClick = async () => {
        setIsLoading(true)
        try {
            const res = await fetch(`${mainDomain}/api/getInfo?url=${url}`);
            const pageInfo = await res.json();
            pageInfo.title == "" ? setPageTitle("") : setPageTitle(pageInfo.title)
            pageInfo.url == "" ? setPageUrl("") : setPageUrl(pageInfo.url)
            pageInfo.author == "" ? setPageAuthor("") : setPageAuthor(pageInfo.author)
            pageInfo.source == "" ? setPageSource("") : setPageSource(pageInfo.source)
        } catch (error) {
            console.error("Error:", error);
            setPageTitle("");
            onErrorUrl()
        } finally {
            setIsLoading(false);
        }
    }

    const onErrorUrl = () => {
        toast({ title: translation("cite_fech_error_title"), description: translation("cite_fech_error_description") })
    }

    useEffect(() => {
        setPageTitle("");
    }, [url])

    return (
        <div className='w-full flex flex-col items-center mt-20 '>
            <div className='max-w-md text-center'>
                <h1 data-testid="hero-text" className="relative font-display text-4xl font-extrabold leading-[1.15] text-black sm:text-5xl sm:leading-[1.15]">
                    <span className="bg-gradient-to-r from-violet-800 via-fuchsia-800 to-rose-400 bg-clip-text text-transparent">{translation("title")}</span>
                </h1>
                <div className='absolute mx-56 translate-x-96 -rotate-90'>
                    <svg fill="#14b8a6" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                        width="30px" height="300px" viewBox="0 0 266.495 266.494"
                    >
                        <g>
                            <g>
                                <path d="M150.036,266.494c-0.264,0-0.517-0.006-0.792-0.018c-6.102-0.337-11.332-4.474-13.046-10.347l-26.067-89.027
			l-95.203-18.867c-6.014-1.194-10.614-6.059-11.476-12.123c-0.858-6.062,2.201-12.016,7.65-14.832L242.143,1.617
			C247.5-1.175,254.057-0.29,258.518,3.8c4.474,4.101,5.885,10.55,3.562,16.146l-98.743,237.655
			C161.097,263.018,155.836,266.494,150.036,266.494z"/>
                            </g>
                        </g>
                    </svg>

                </div>
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
                isloading ? <p>Loading ...</p> : <CitaResult author={pageAuthor} source={pageSource} pageTitle={pageTitle} url={pageUrl}></CitaResult>
            }
        </div>
    )
}

export default Main