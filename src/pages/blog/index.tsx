import { getAllPosts, PostMeta } from "@/api/posts";
import { Wrapper, Container, StyledHeader } from "../projects/Projects.styled";
import PostCard from "@/components/blog/PostCard";

interface Props {
  posts: PostMeta[];
}
function BlogIndex({ posts }: Props) {
  return (
    <Wrapper>
      <StyledHeader>Blog</StyledHeader>
      {posts.map((post) => (
        <PostCard post={post} key={post.slug} linkTo={`/blog/${post.slug}`} />
      ))}
    </Wrapper>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { posts } };
}
export default BlogIndex;
