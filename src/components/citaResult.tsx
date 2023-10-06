import React from 'react'
import { Button } from './ui/button'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useToast } from "@/components/ui/use-toast"


interface Props {
    pageTitle: string,
    url: string
}

function CitaResult({ pageTitle, url }: Props) {

    const now = new Date();
    const day = now.getDay(); // returns a number representing the day of the week, starting with 0 for Sunday
    const month = now.getMonth();
    const year = now.getFullYear();

    const { toast } = useToast()

    const cita = `${pageTitle} - Recuperado el ${day}/${month}/${year} - ${url}`

    return (

        <div className=' mt-24 w-96 md:w-1/2 flex justify-center'>
            <div className='absolute mx-auto -translate-y-2/4 rounded-xl bg-navy-blue-12 px-2	py-1 text-xs font-semibold text-white bg-primary'>Resientemente citado</div>
            <div className='w-full overflow-hidden rounded-xl border border-navy-blue-6 shadow-sm'>
                <div className='space-y-6 p-6'>
                    <div className="grow overflow-hidden">
                        <h3 className="truncate text-sm font-semibold">{pageTitle}</h3>
                        <div className='mt-6'>
                            <a href={url} target='_blank'>
                                <Button size="sm">
                                    Prueba la url
                                </Button>
                            </a>

                        </div>
                    </div>
                    <div className='font-serif'>
                        <p>{cita}</p>

                    </div>
                    <CopyToClipboard text={cita}>
                        <Button variant="secondary" size="sm" onClick={() => {
                            toast({
                                title: "Excelente",
                                description: "Se ha copiado en el portapapeles correctamente",
                            })
                        }}>
                            Copiar en portapapeles
                        </Button>
                    </CopyToClipboard>


                </div>
            </div>

        </div>
    )
}

export default CitaResult