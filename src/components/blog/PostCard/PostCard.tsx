import Link from "next/link";
import Image from "next/image";
import {
  Container,
  ContentContainer,
  ContentHeader,
  ContentExcerpt,
  ContentLink,
} from "./PostCard.styled";
import { PostMeta } from "@/api/posts";

interface Props {
  post: PostMeta;
}
function PostCard({ post }: Props) {
  const handleProjectLinkClick = (e) => {
    e.stopPropagation();
  };
  return (
    <Link href={`/projects/${post.slug}`} passHref>
      <Container>
        <ContentContainer>
          <ContentHeader>{post.title}</ContentHeader>
          <ContentExcerpt>{post.excerpt}</ContentExcerpt>
          <ContentLink onClick={handleProjectLinkClick}>
            <Link href={post.projectUrl}>
              <a target="_blank">View Project</a>
            </Link>
          </ContentLink>
        </ContentContainer>
        <Image
          src={post.coverImage}
          objectFit="cover"
          width={600}
          height={400}
          alt={post.title}
        />
      </Container>
    </Link>
  );
}

export default PostCard;
