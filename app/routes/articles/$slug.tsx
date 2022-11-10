// ./app/routes/articles/$slug.tsx

import { gql, useQuery } from "@apollo/client";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { useStoryblokState, StoryblokComponent } from "@storyblok/react";

const PAGEITEM_QUERY = gql`
  query ($slug: ID!) {
    PageItem(id: $slug) {
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

export const loader = async ({ params }: { params: any }) => {
  const slug = params.slug ?? "home";

  console.log({ slug });

  return json({ slug });
};

export default function Page() {
  let { slug } = useLoaderData();
  const { data } = useQuery(PAGEITEM_QUERY, {
    variables: {
      slug: `articles/${slug}`,
    },
  });

  console.log({ slug, data });
  let story: any = useStoryblokState(data?.PageItem);

  if (!story?.content) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className="wrapper">
        <StoryblokComponent blok={story.content} />
      </div>
    </main>
  );
}
