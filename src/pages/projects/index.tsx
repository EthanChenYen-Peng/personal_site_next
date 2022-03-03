import  Link from 'next/link'
import { Wrapper, StyledHeader } from './Project.styled'
import { getAllPosts, PostMeta } from '@/api/posts';
import PostCard from '@/components/blog/PostCard'

interface Props {
  posts: PostMeta[]
}
function Projects({posts}: Props) {
  return (
    <Wrapper>
      <StyledHeader>Projects</StyledHeader>
      {posts.map((post)=> (
        <PostCard />
      ))}
    </Wrapper>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()
  .slice(0, 9)
.map((post) => post.meta);
console.log(posts)

return { props: { posts } };
}
export default Projects
