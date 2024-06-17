import BlogList from "@/components/BlogList";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const query2 = groq`
  *[_type == 'post'] {
    ...,
    author->,
    category[]->
  } | order(_createdAt desc)
`;

async function getPost() {
  const query = `
  *[_type == "post"] {
    title,
    slug,
    author,
    mainImage,
  }
  
  `;

  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const post = await getPost();
  console.log(post, "pots");
  return (
    <main>
      <BlogList query2={query2} />
    </main>
  );
}
