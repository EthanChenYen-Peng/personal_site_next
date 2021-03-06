import { serialize } from 'next-mdx-remote/serialize'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import { getBlogImageSizes, getPostFromSlug } from '@/api/posts'
import { PostMeta } from '@/api/posts'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
export async function buildMdxSource(slug: string) {
  const { content, meta } = getPostFromSlug(slug)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        rehypeHighlight,
      ],
    },
  })
  return { source: mdxSource, meta }
}

export interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>
  meta: PostMeta
}
