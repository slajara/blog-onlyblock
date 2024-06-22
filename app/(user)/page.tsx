import BlogList from "@/components/BlogList";
import { client } from "@/sanity/lib/client";
import { Post } from "@/typings";
import { groq } from "next-sanity";

export default async function Home() {
  const query = groq`
  *[_type == 'post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

  async function fetchPostsA() {
    const posts: Post[] = await client.fetch(query);
    return posts;
  }
  const posts = await fetchPostsA();

  {
    return (
      <div>
        <BlogList posts={posts} />
      </div>
    );
  }
}
