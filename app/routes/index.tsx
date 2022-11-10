import { gql, useQuery } from "@apollo/client";
import { useStoryblokState, StoryblokComponent } from "@storyblok/react";

const PAGEITEMS_QUERY = gql`
  {
    PageItem(id: "home-page") {
      id
      slug
      content {
        _uid
        component
        body
      }
    }
  }
`;

export default function Index() {
  const { data } = useQuery(PAGEITEMS_QUERY);

  console.log({ data });

  let story: any = useStoryblokState(data?.PageItem);

  if (!story?.content) {
    return <div>Loading...</div>;
  }

  return <StoryblokComponent blok={story.content} />;
}
