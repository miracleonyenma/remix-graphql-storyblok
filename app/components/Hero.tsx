// ./app/components/Hero.jsx

import { storyblokEditable } from "@storyblok/react";

const Hero = ({ blok }: { blok: any }) => {
  return (
    <section {...storyblokEditable(blok)} key={blok?._uid} className="hero">
      <div className="wrapper flex w-full">
        <header
          className="hero-header w-full min-h-screen bg-cover"
          style={{ backgroundImage: `url(${blok?.image.filename})` }}
        >
          <div className="wrapper flex flex-col items-center justify-center w-full h-full text-slate-50 bg-slate-800/90">
            <h1 className="text-4xl font-bold">{blok?.caption}</h1>
            <p> {blok?.text} </p>
          </div>
        </header>
      </div>
    </section>
  );
};

export default Hero;
