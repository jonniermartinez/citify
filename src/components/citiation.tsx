"use client"
import { useTranslations } from 'next-intl';
import { useState } from 'react';


interface Props {
    pageTitle: string,
    url: string,
    author: string,
    source: string
}
const titleClass = "absolute px-4 py-1 truncate text-xs -translate-y-7 rounded-full font-bold text-white"
function Citiation({ pageTitle, url, author, source }: Props) {
    source;
    const [authorHover, setAuthorHover] = useState<Boolean>(false)
    const [titleHover, setTitleHover] = useState<Boolean>(false)
    const [urlHover, setUrlHover] = useState<Boolean>(false)

    const translation = useTranslations("Index")

    const cita = ` - ${translation("cite_retrieved")} 6/9/2023 ${translation("cite_from")} `

    return (
        <div className='mt-16 w-96 md:w-5/12 h-48 flex justify-center'>
            <div className='absolute mx-auto -translate-y-2/4 rounded-xl bg-navy-blue-12 px-2	py-1 text-xs font-semibold text-white bg-primary'>{source}</div>
            <div className='w-full overflow-hidden rounded-xl border border-navy-blue-6 shadow-sm'>
                <div className='space-y-6 p-6'>
                    {/* <div className="grow overflow-hidden">
                        <h3 className="truncate text-sm font-semibold">{pageTitle}</h3>
                    </div> */}
                    <div className='font-serif'>
                        <div>
                            {/* Author */}
                            <span className={`${titleClass} bg-violet-600`} hidden={authorHover ? false : true} >Author</span>
                            <span
                                className='relative hover:bg-violet-600 hover:text-white cursor-cell'
                                onMouseOver={() => setAuthorHover(true)}
                                onMouseLeave={() => setAuthorHover(false)}>
                                {author === "" ? author : `${author}.`}
                            </span>
                            {" "}
                            {/* Title */}
                            <span className={`${titleClass} bg-pink-700`} hidden={titleHover ? false : true}>Title</span>
                            <span
                                className='relative hover:bg-pink-700 hover:text-white cursor-cell'
                                onMouseOver={() => setTitleHover(true)}
                                onMouseLeave={() => setTitleHover(false)}
                            >
                                {pageTitle}
                            </span>
                            {cita}
                            <p>
                                <span className={`${titleClass} bg-amber-600`} hidden={urlHover ? false : true}>URL</span>

                                <span className="relative text-sky-800 hover:text-white hover:bg-amber-600 cursor-cell"
                                    onMouseOver={() => setUrlHover(true)}
                                    onMouseLeave={() => setUrlHover(false)}
                                >{url}</span>

                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Citiation