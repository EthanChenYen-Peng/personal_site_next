import { NextSeo } from 'next-seo'
import { getAllPosts, PostMeta } from '@/api/posts'
import PostCard from '@/components/blog/PostCard'
import { StyledHeader, Wrapper } from '../projects/Projects.styled'
interface Props {
  posts: PostMeta[]
}
function BlogIndex({ posts }: Props) {
  return (
    <Wrapper>
      <NextSeo title="Blog" />
      <StyledHeader>Blog</StyledHeader>
      {posts.map((post) => (
        <PostCard post={post} key={post.slug} linkTo={`/blog/${post.slug}`} />
      ))}
    </Wrapper>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta)

  return { props: { posts } }
}
export default BlogIndex
