import Citiation from "./citiation"

function CitiationAnathomic() {
    return (
        <div>
            <h2 className="scroll-m-20 text-2xl font-bold mt-24 tracking-tight lg:text-5xl text-center">APA Citiation Anathomic</h2>
            <div className='mt-16 mx-auto flex justify-center'>
                <div className='absolute mx-auto -translate-y-2/4 rounded-xl bg-navy-blue-12 px-2	py-1 text-xs font-semibold text-white bg-primary'>codeconfessions.substack.com</div>
                <div className='w-full overflow-hidden rounded-xl border border-navy-blue-6 shadow-sm py-20 px-4'>
                    {/* contend */}
                    <p className="text-xl">
                        <span>
                            Abhinav Upadhyay. {" "}
                        </span>
                        <span>
                            What Every Developer Should Know About GPU Computing
                        </span>
                        <span>
                            6/9/2023
                        </span>
                        <span>
                            https://codeconfessions.substack.com/p/gpu-computing
                        </span>
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