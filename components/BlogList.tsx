import { urlForImage } from "@/sanity/lib/image";
import { Post } from "@/typings";
import Image from "next/image";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  return (
    <div>
      <hr className="border-[#F7Ab0A] mb-10" />
      <div>
        {posts.map((post) => (
          <div key={post._id}>
            <div>
              <Image
                className="object-cover object-left lg:object-center"
                src={urlForImage()}
                alt={post.author.name}
                fill
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
