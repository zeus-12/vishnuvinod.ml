import { Button } from "@mantine/core";
import { useContext, useRef } from "react";
import { ScrollContext } from "@/lib/ScrollObserver";
import Link from "@/components/Link";

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  //tweak this for changing the opacity of text
  return 0.2;
};

const AboutMe = () => {
  const { scrollY } = useContext(ScrollContext);

  const refContainer = useRef(null);

  //change this for adding more opacityBlocks
  const numOfPages = 3;
  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  // prob an overkill ik :)
  const dob = new Date("2002-04-12");
  const age = Math.floor(
    (new Date().getTime() - dob.getTime()) / (1000 * 60 * 60 * 24 * 365)
  );

  return (
    <div ref={refContainer} className="bg-black text-white">
      <div className="min-h-screen max-w-5xl mx-auto px-4 lg:px-8 pt-24 md:pt-28 lg:pt-36 flex flex-col justify-center items-center text-4xl md:text-5xl lg:text-6xl tracking-tight font-semibold">
        <div className="leading-[1.15] space-y-4">
          <p className="mb-2 text-gray-300">⚡️</p>
          <div
            className="transition-opacity duration-500"
            style={{ opacity: opacityForBlock(progress, 0) }}
          >
            A {age}-year-old based in India, currently pursuing Engineering
            Design from{" "}
            <Link
              className="underline decoration-primary hover:bg-primary hover:text-black transition-colors duration-150 ease-in-out"
              href="https://www.iitm.ac.in/"
            >
              IIT Madras
            </Link>
          </div>
          <span
            className={`transition-opacity duration-500 inline-block after:content-['_']`}
            style={{ opacity: opacityForBlock(progress, 1) }}
          >
            I started out automating tasks, building websites using no-code
            tools. And later on, I{" "}
            <span className="underline decoration-primary hover:bg-primary hover:text-black transition-colors duration-150 ease-in-out">
              taught myself
            </span>{" "}
            how to code, fast-forward to today, I do programming in{" "}
            <span className="underline decoration-primary hover:bg-primary hover:text-black transition-colors duration-150 ease-in-out">
              various languages and technologies.
            </span>
          </span>
          <span
            className={`transition-opacity duration-500 inline-block`}
            style={{ opacity: opacityForBlock(progress, 2) }}
          >
            I&apos;m interested in building something awesome or automate tasks
            with code, currently focused on{" "}
            <span className="underline decoration-primary hover:bg-primary hover:text-black transition-colors duration-150 ease-in-out">
              Web & Mobile Full-Stack Development.
            </span>
          </span>
        </div>
      </div>

      <div className="flex mb-2 pt-32 justify-between items-center">
        <p
          id="projects"
          className="text-4xl md:text-4xl lg:text-5xl tracking-tight font-semibold text-gray-300"
        >
          💪{" "}
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#fdd819] to-[#e80505] ">
            Featured Projects
          </span>
        </p>
        <Link href="/projects">
          <Button
            variant="light"
            color="dark"
            className="hover:border-orange-400"
          >
            <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#ed6ea0] to-[#efbdaa] ">
              See All
            </p>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
