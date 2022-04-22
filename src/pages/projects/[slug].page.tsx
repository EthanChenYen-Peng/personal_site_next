import type { GetStaticProps, GetStaticPaths } from 'next'
import { getSlugs } from '@/api/posts'
import { buildMdxSource, MDXPost } from '@/utils/mdx'
import PostShow from '../blog/[slug].page'

interface Props {
  post: MDXPost
}
export default function ProjectShow({ post }: Props) {
  return <PostShow post={post} />
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
