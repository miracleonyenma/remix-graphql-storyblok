import { StoryblokComponent } from "@storyblok/react";

const Grid = ({ blok }: { blok: any }) => (
  <div className="grid">
    {blok?.columns.map((nestedBlock: any) => (
      <StoryblokComponent blok={nestedBlock} key={nestedBlock._uid} />
    ))}
  </div>
);

export default Grid;
