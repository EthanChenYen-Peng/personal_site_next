import type { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import {getPostFromSlug, getSlugs, PostMeta} from '@/api/posts'
import "highlight.js/styles/hybrid.css";


interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMeta;
}

interface Props {
  post: MDXPost
}

const componentsForMarkdownDisplay = { Image }
export default function Post({ post }: Props){
  console.log(post.source)

  return (
    <>
    <div>Post page {post.meta.title}</div>
    <MDXRemote {...post.source} components={componentsForMarkdownDisplay}/>
  </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const { content, meta } = getPostFromSlug(slug);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });
  return { props: { post: { source: mdxSource, meta } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));
  console.log(paths)

  return {
    paths,
    fallback: false,
  };
};
