import urlFor from "@/sanity/lib/image";
import { Post } from "@/typings";
import Image from "next/image";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) { {/** 6:37 */}
  return (
    <div>
      <hr className="border-[#F7Ab0A] mb-10" />
      <div>
        {posts.map((post) => (
          <div key={post._id} className="flex flex-col group cursor-pointer">
            <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
              <Image
                className="object-cover object-left lg:object-center"
                src={urlFor(post.mainImage).url()}
                alt={post._createdAt}
                width={500}
                height={500}
                priority={true}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
