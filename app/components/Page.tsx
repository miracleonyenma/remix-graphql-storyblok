// ./app/components/Page.tsx

import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Page = ({ blok }: { blok: any }) => (
  <main {...storyblokEditable(blok)} key={blok._uid}>
    {blok.body.map((nestedBlok: any) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
