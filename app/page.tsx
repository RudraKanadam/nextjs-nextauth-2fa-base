import GlobalNavBar from "@/components/global/GlobalNavbar";
import { SparklesCore } from "@/components/ui/sparkles";
import { FlipWords } from "@/components/ui/flip-words";
import Pricing from "@/components/landingPage/pricing";

export default function Home() {
  const words = ["Modern", "Faster", "Better"];
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <GlobalNavBar />
      <div className="h-screen relative w-full bg-black flex flex-col items-start justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <div className="text-8xl ml-32 font-normal text-neutral-600 dark:text-neutral-400">
          Develop
          <FlipWords words={words} /> <br />
          <div className="text-4xl mt-4 mx-44 font-normal text-neutral-600 dark:text-neutral-400">
            with NextQuantum
          </div>
        </div>
      </div>
      <div className="relative w-full flex inset-0 h-full justify-center items-center bg-black">
        <SparklesCore
          id="sparkles-pricing"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="absolute w-full h-full"
          particleColor="#FFFFFF"
          static
        />
        <Pricing />
      </div>
    </main>
  );
}
