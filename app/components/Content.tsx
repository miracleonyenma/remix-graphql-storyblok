// ./app/components/Content.jsx

import { storyblokEditable, renderRichText } from "@storyblok/react";

const Content = ({ blok }: { blok: any }) => {
  return (
    <article {...storyblokEditable(blok)} key={blok?._uid} className="content prose p-4 m-auto">
      <div
        className="body"
        dangerouslySetInnerHTML={{
          __html: renderRichText(blok?.body),
        }}
      ></div>
    </article>
  );
};

export default Content;
