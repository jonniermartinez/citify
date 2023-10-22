import Main from "@/components/main"
import { Toaster } from "@/components/ui/toaster"
import CitiationExamples from "@/components/citiationExamples"
import CitiationAnathomic from "@/components/citiationAnathomic"

// Kaplas
export default function Home() {
  return (
    <>
      <Main></Main>
      <CitiationExamples></CitiationExamples>
      <Toaster></Toaster>
      {/* <CitiationAnathomic></CitiationAnathomic> */}

    </>
  )
}
