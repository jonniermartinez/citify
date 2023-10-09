"use client"

import { useEffect, useState } from 'react'


import { Input } from './ui/input'
import { Button } from './ui/button'
import CitaResult from './citaResult'
import { Label } from './ui/label'

// NO OLVIDAD ANADIR LOS TRAKINGS EVENTS PARA PRODUCION
// import { MixpanelTraking } from '@/services/mixpanel'
const mainDomain = process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000";

function Main() {
    const [url, setUrl] = useState(String)
    const [pageTitle, setPageTitle] = useState(String);
    const [isloading, setIsLoading] = useState<Boolean>(false);

    useEffect(() => {
        // in development dont do that 
        // MixpanelTraking.getIntance().pageViewed();
    }, [])

    const handleClick = async () => {
        setIsLoading(true)
        try {
            const res = await fetch(`${mainDomain}/api/getDownloads?url=${url}`);
            const resPageTitle = await res.json();
            setPageTitle(resPageTitle.pageTitle);
        } catch (error) {
            // Manejar errores si ocurren durante la solicitud
            console.error("Error:", error);
        } finally {
            // Establece isLoading en false una vez que la solicitud haya finalizado (éxito o error)
            // url que funcionarion y fueron creadas
            // MixpanelTraking.getIntance().citationGenerated(url)
            setIsLoading(false);
        }
    }

    return (
        <div className='w-full flex flex-col items-center justify-center mt-8'>
            <div className='max-w-md text-center'>
                <h1 data-testid="hero-text" className=" font-display text-4xl font-bold leading-[1.15] text-black sm:text-5xl sm:leading-[1.15]">
                    Generador de citas <br></br>

                    <span className="bg-gradient-to-r from-violet-800 via-fuchsia-800 to-rose-400 bg-clip-text text-transparent">APA</span>
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-1">
                    Genera fácilmente citas y listas de referencias en estilo APA
                </p>
                <div className='flex flex-col gap-6 mt-8'>
                    <div>
                        <Label>Ingresa la url</Label>
                        <Input
                            placeholder='https://es.wikipedia.org/wiki/Dante_Alighieri'
                            onChange={(e) => setUrl(e.target.value)}
                        >
                        </Input>
                    </div>
                    <Button onClick={() => handleClick()}>Genera referencia APA</Button>
                </div>
            </div>
            {
                isloading ? <p>Loading ...</p> : <CitaResult pageTitle={pageTitle} url={url}></CitaResult>
            }

        </div>
    )
}

export default Main