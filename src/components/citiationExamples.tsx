import Citiation from "./citiation"

function CitiationExamples() {
    return (
        <>
            <h2 className="scroll-m-20 text-2xl font-bold mt-24 tracking-tight lg:text-5xl text-center">Citiation Examples</h2>
            <div className="flex gap-14 mx-28 relative flex-wrap items-center justify-center">
                <Citiation pageTitle="Convoy, Backed by Jeff Bezos and Bill Gates, Is Closing Operation With No Buyer" url="https://www.bloomberg.com/news/articles/2023-10-19/bezos-backed-startup-convoy-closes-operations-with-no-buyer" author="Lizette Chapman" source="bloomberg.com"></Citiation>
                <Citiation pageTitle="Mathematicians Found 12,000 Solutions to the Notoriously Hard Three-Body Problem" url="https://www.popularmechanics.com/science/math/a45074216/three-body-problem-solutions/" author="" source="popularmechanics.com"></Citiation>
            </div>
            <div className="absolute -translate-x-[-40px] -translate-y-5">
                <svg fill="#4f46e5" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    width="50px" height="50px" viewBox="0 0 266.495 266.494"
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


            {/* Other component */}
            {/* <h2 className="scroll-m-20 text-2xl font-bold mt-24 tracking-tight lg:text-5xl text-center">WaitList</h2> */}
        </>
    )
}

export default CitiationExamples