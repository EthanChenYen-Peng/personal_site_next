import Link from 'next/link'
import Image from 'next/image'
import { PostMeta } from "@/api/posts";
interface Props {
  post: PostMeta;
}
function PostCard({ post }: Props) {
  return (
    <>
      <Link href={`/projects/${post.slug}`}>
        {post.title}
      </Link>
      <Image src={post.coverImage}
        objectFit='cover'
        width={600}
        height={400}/>
    </>
  );
}

export default PostCard;
