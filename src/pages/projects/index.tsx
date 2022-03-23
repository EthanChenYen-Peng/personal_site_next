import { Wrapper, Container,  StyledHeader } from "./Project.styled";
import { getAllPosts, PostMeta } from "@/api/posts";
import PostCard from "@/components/blog/PostCard";

interface Props {
  posts: PostMeta[];
}
function Projects({ posts }: Props) {
  return (
    <Wrapper>
      <StyledHeader>Porfolio Projects</StyledHeader>

      <Container>
        {posts.map((post) => (
          <PostCard post={post} key={post.slug} />
        ))}
      </Container>
    </Wrapper>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);
  console.log(posts);

  return { props: { posts } };
}
export default Projects;
