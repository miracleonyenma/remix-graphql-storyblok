// ./app/components/ArticleHero.jsx

import { storyblokEditable } from "@storyblok/react";

const ArticleHero = ({ blok }: { blok: any }) => {
  return (
    <section
      {...storyblokEditable(blok)}
      key={blok?._uid}
      className="article-hero"
    >
      <div className="wrapper">
        <header className="article-hero-header">
          <div className="cover img-cont h-72">
            <img
              src={blok?.cover_image?.filename+'/m/'}
              alt=""
              className="rounded-b-2xl"
            />
          </div>
          <div className="details">
            <h1 className="text-6xl font-bold">{blok?.title}</h1>
            <p> {blok?.description} </p>
          </div>
        </header>
      </div>
    </section>
  );
};

export default ArticleHero;
