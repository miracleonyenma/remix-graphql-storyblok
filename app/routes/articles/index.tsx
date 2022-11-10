// ./app/routes/articles/index.tsx

import { gql, useQuery } from "@apollo/client";
import { useStoryblokState, StoryblokComponent } from "@storyblok/react";
import ArticlesList from "~/components/ArticlesList";

const PAGEITEMS_QUERY = gql`
  {
    PageItem(id: "articles") {
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

// query to get article pages
const ARTICLES_QUERY = gql`
  {
    PageItems(starts_with: "articles", excluding_ids: "210214930") {
      items {
        full_slug
        name
        slug
        id
      }
    }
  }
`;

export default function Index() {
  const pageItems = useQuery(PAGEITEMS_QUERY);
  const articleItems = useQuery(ARTICLES_QUERY);

  console.log({ rrr: articleItems.data });

  let story: any = useStoryblokState(pageItems.data?.PageItem);

  if (!story?.content) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <StoryblokComponent blok={story.content} />
      <ArticlesList items={articleItems.data.PageItems.items} />
    </>
  );
}
