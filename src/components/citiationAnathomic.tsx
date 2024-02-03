import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const tileClass =
  "absolute px-4 py-1 truncate text-xs -translate-y-7 rounded-full font-bold text-white";
function CitiationAnathomic() {
  return (
    <div>
      <h2 className="scroll-m-20 text-2xl font-bold mt-24 tracking-tight lg:text-5xl text-center">
        APA Citiation Anathomic
      </h2>

      <div className="mt-16 mx-auto flex justify-center">
        <div className="absolute mx-auto -translate-y-2/4 rounded-xl bg-navy-blue-12 px-2 py-1 text-xs font-semibold text-white bg-primary">
          codeconfessions.substack.com
        </div>
        <div className="w-72 md:w-1/2 overflow-hidden rounded-xl border border-navy-blue-6 shadow-sm py-20 px-8 ">
          {/* contend */}
          <p className="font-serif text-xl">
            <span className={`${tileClass} bg-violet-600 ${inter.className}`}>
              Author
            </span>
            <span className="relative bg-violet-600 text-white cursor-cell">
              Abhinav Upadhyay.
            </span>{" "}
            <span className={`${tileClass} bg-pink-700 ${inter.className}`}>
              Title
            </span>
            <span className="relative bg-pink-700 text-white cursor-cell">
              What Every Developer Should Know About GPU Computing
            </span>{" "}
            <span
              className={`${tileClass} bg-green-600 ${inter.className} translate-y-0 translate-x-24`}
            >
              Date
            </span>
            <span className="relative bg-green-600 text-white cursor-cell ">
              6/9/2023
            </span>{" "}
            <div>
              <span
                className={`${tileClass} bg-amber-600 ${inter.className} md:translate-y-8 translate-y-14`}
              >
                Url
              </span>

              <span className="relative bg-amber-600 text-white cursor-cell">
                https://codeconfessions.substack.com/p/gpu-computing
              </span>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
/* 
Abhinav Upadhyay -> author
What Every Developer Should Know About GPU Computing -> title
6/9/2023 -> date
https://codeconfessions.substack.com/p/gpu-computing -> url
codeconfessions.substack.com -> source
*/
export default CitiationAnathomic;
