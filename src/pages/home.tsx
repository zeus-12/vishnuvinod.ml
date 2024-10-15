import AboutMe from "@/components/about-me";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo />
      <div className="py-4 mt-6 md:py-8 lg:pt-8">
        <div className="px-4 sm:mx-4 lg:px-12 md:px-8 xl:px-24 xl:pt-10">
          <Hero />
          <AboutMe />
        </div>
        <Projects />
        <Contact />
      </div>
    </>
  );
}
// put this somewhere

//               I've been close to a computer since an early age, and been
//               passionate about it ever since. I started out building websites
//               using no-code tools back in 2012, infact i still remember
//               deploying my{" "}
//               <a
//                 className="text-blue-300"
//                 href="https://speedcubing3.weebly.com"
//               >
//                 first website
//               </a>{" "}
//               on{" "}
//               <a className="text-blue-300" href="https://www.weebly.com">
//                 Weebly
//               </a>{" "}
//               And later on, I taught myself how to code,
// fast-forward to today,
//             </p>

//             <p>
//               When I'm not coding I play games with my friends, binge
//               shows/movies, sit down for a good game of chess, or if the
//               weather's good, play basketball! 🏀 I also love listening to
//               Hip-Hop, Pop & Lo-Fi music.
