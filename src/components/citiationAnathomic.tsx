import { Inter } from "next/font/google"
const inter = Inter({ subsets: ['latin'] })

const tileClass = "absolute px-4 py-1 truncate text-xs -translate-y-7 rounded-full font-bold text-white"
function CitiationAnathomic() {
    return (
        <div>
            <h2 className="scroll-m-20 text-2xl font-bold mt-24 tracking-tight lg:text-5xl text-center">APA Citiation Anathomic</h2>
            <div className="absolute translate-x-[80vw] -rotate-90">
                <svg fill="#c026d3" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    width="20px" height="20px" viewBox="0 0 266.495 266.494"
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
            <div className='mt-16 mx-auto flex justify-center'>
                <div className='absolute mx-auto -translate-y-2/4 rounded-xl bg-navy-blue-12 px-2 py-1 text-xs font-semibold text-white bg-primary'>codeconfessions.substack.com</div>
                <div className='w-1/2 overflow-hidden rounded-xl border border-navy-blue-6 shadow-sm py-20 px-8 '>
                    {/* contend */}
                    <p className="font-serif text-xl">
                        <span className={`${tileClass} bg-violet-600 ${inter.className}`}>Author</span>

                        <span
                            className='relative bg-violet-600 text-white cursor-cell'>
                            Abhinav Upadhyay.
                        </span>
                        {" "}
                        <span className={`${tileClass} bg-pink-700 ${inter.className}`}>Title</span>

                        <span
                            className='relative bg-pink-700 text-white cursor-cell'>
                            What Every Developer Should Know About GPU Computing
                        </span>
                        {" "}
                        <span className={`${tileClass} bg-green-600 ${inter.className} translate-y-0 translate-x-24`}>Date</span>

                        <span
                            className='relative bg-green-600 text-white cursor-cell '>
                            6/9/2023
                        </span>
                        {" "}
                        <div>
                            <span className={`${tileClass} bg-amber-600 ${inter.className} translate-y-7`}>Url</span>

                            <span
                                className='relative bg-amber-600 text-white cursor-cell'>
                                https://codeconfessions.substack.com/p/gpu-computing
                            </span>
                        </div>

                    </p>
                </div>
            </div>

        </div >

    )
}
/* 
Abhinav Upadhyay -> author
What Every Developer Should Know About GPU Computing -> title
6/9/2023 -> date
https://codeconfessions.substack.com/p/gpu-computing -> url
codeconfessions.substack.com -> source
*/
export default CitiationAnathomic