import type { GetStaticProps, GetStaticPaths } from "next";
import {getPostFromSlug, getSlugs} from '@/api/posts'

export default function Post({post}){
  return (
    <div>Post page {post.title}</div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const { content, meta } = getPostFromSlug(slug);

  return { props: { post: { meta} } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));
  console.log(paths)

  return {
    paths,
    fallback: false,
  };
};
