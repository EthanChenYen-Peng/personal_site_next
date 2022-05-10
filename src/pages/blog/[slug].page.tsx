import { NextSeo } from 'next-seo'
import type { GetStaticProps, GetStaticPaths } from 'next'
import { getSlugs } from '@/api/posts'
import 'highlight.js/styles/hybrid.css'
import { buildMdxSource, MDXPost } from '@/utils/mdx'
import Post from '@/components/blog/Post'
import { Container } from './Blog.styled'

interface Props {
  post: MDXPost
}
export default function PostShow({ post }: Props) {
  return (
    <Container>
      <NextSeo title={post.meta.title} />
      <Post post={post} />
    </Container>
  )
}

type Params = {
  slug: string
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as Params
  return await buildMdxSource(slug)
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
