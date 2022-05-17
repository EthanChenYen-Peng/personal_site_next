import type { GetStaticProps, GetStaticPaths } from 'next'
import { getBlogImageSizes, getSlugs } from '@/api/posts'
import type { ImageSize } from '@/api/posts'
import { buildMdxSource, MDXPost } from '@/utils/mdx'
import PostShow from '../blog/[slug].page'

interface Props {
  post: MDXPost
  imageSizes: ImageSize[]
}
export default function ProjectShow({ post, imageSizes }: Props) {
  return <PostShow post={post} imageSizes={imageSizes} />
}

type Params = {
  slug: string
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as Params
  const post = await buildMdxSource(slug)
  const imageSizes = getBlogImageSizes(slug)
  return { props: { post, imageSizes } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
