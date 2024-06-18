import BlogList from "@/components/BlogList";
import PostCard from "@/components/PostCard";
import { client } from "@/sanity/lib/client";
import { Post } from "@/typings";
import { groq } from "next-sanity";

async function getPosts() {
  const query = `
    *[_type == "post"] {
      title,
      slug,
      author,
      mainImage,
      description,
    } | order(_createdAt desc)`;

  const data = await client.fetch(query);
  return data;
}

const query = groq`
*[_type == 'post'] {
 ...,
 author->,
 categories[]->
} | order(_createdAt desc)`;

export default async function Home() {
  {
    /** 
const posts: Post[] = await getPosts();
  console.log(posts, "posts");
  return (
    <div>
      {posts?.length > 0 &&
        posts?.map((post) => <PostCard key={post?._id} post={post} />)}
    </div>
  );

*/
  }
  const posts = await client.fetch(query);

  return (
    <div>
      <BlogList posts={posts} />
    </div>
  );
}
