import type { GetStaticProps, GetStaticPaths } from "next";
import { getSlugs } from "@/api/posts";
import "highlight.js/styles/hybrid.css";
import { Container } from "../projects/Project.styled.ts";
import { buildMdxSource } from "@/utils/mdx";
import Post from "@/components/blog/Post";

export default function PostShow({ post }: Props) {
  return (
    <Container>
      <Post post={post} />
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  return await buildMdxSource(slug);
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
