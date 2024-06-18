import { Post } from "@/typings";
import Link from "next/link";

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  return (
    
    
    <div className="mb-8 p-4 boder border-gray-900 rounded-md shadow-sm shadow-purple-950 hover:shadow-md hover:bg-purple-500 hover:text-white ">
     {/**
      *  <Link href={`/posts/`}>
        <h2>{post?.title}</h2>
        <p>{post?.description}</p>
        <p>{post?.slug?.current}</p>
      </Link>
      */}
    </div>
  );
};

export default PostCard;
