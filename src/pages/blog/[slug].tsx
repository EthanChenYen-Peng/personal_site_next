import type { GetStaticProps, GetStaticPaths } from "next";
import { getSlugs } from "@/api/posts";
import "highlight.js/styles/hybrid.css";
import { Container } from "../projects/Project.styled";
import { buildMdxSource } from "@/utils/mdx";
import Post from "@/components/blog/Post";

export default function PostShow({ post }: { post: any }) {
  return (
    <Container>
      <Post post={post} />
    </Container>
  );
}

type Params = {
  slug: string;
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as Params;
  return await buildMdxSource(slug);
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
