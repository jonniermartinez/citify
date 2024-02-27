import Citiation from "./citiation";

function CitiationExamples() {
  return (
    <>
      <h2 className="scroll-m-20 text-2xl font-bold mt-24 tracking-tight lg:text-5xl text-center">
        Citiation Examples
      </h2>
      <div className="flex gap-14 mx-28 relative flex-wrap items-center justify-center">
        <Citiation
          pageTitle="Convoy, Backed by Jeff Bezos and Bill Gates, Is Closing Operation With No Buyer"
          url="https://www.bloomberg.com/news/articles/2023-10-19/bezos-backed-startup-convoy-closes-operations-with-no-buyer"
          author="Lizette Chapman"
          source="bloomberg.com"
        ></Citiation>
        <Citiation
          pageTitle="Mathematicians Found 12,000 Solutions to the Notoriously Hard Three-Body Problem"
          url="https://www.popularmechanics.com/science/math/a45074216/three-body-problem-solutions/"
          author=""
          source="popularmechanics.com"
        ></Citiation>
      </div>

      {/* Other component */}
      {/* <h2 className="scroll-m-20 text-2xl font-bold mt-24 tracking-tight lg:text-5xl text-center">WaitList</h2> */}
    </>
  );
}

export default CitiationExamples;
