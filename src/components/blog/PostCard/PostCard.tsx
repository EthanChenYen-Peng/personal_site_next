import Link from 'next/link'
import { PostMeta } from "@/api/posts";
interface Props {
  post: PostMeta;
}
function PostCard({ post }: Props) {
  return (
    <>
      <h1>Post card</h1>
      <Link href={`/projects/${post.slug}`}>
        {post.title}
      </Link>
    </>
  );
}

export default PostCard;
