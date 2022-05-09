import Link from 'next/link'
import Image from 'next/image'
import {
  Container,
  ContentContainer,
  ContentHeader,
  ContentExcerpt,
  ContentLink,
} from './PostCard.styled'
import { PostMeta } from '@/api/posts'
import { MouseEvent } from 'react'

interface Props {
  post: PostMeta
  linkTo: string
}
function Spacer() {
  return <div></div>
}
function PostCard({ post, linkTo }: Props) {
  const handleProjectLinkClick = (e: MouseEvent) => {
    e.stopPropagation()
  }
  return (
    <Link href={linkTo} passHref>
      <Container>
        <ContentContainer>
          <ContentHeader>{post.title}</ContentHeader>
          <ContentExcerpt>{post.excerpt}</ContentExcerpt>
          {post.projectUrl ? (
            <ContentLink onClick={handleProjectLinkClick}>
              <Link href={post.projectUrl}>
                <a target="_blank">View Project</a>
              </Link>
            </ContentLink>
          ) : (
            <Spacer />
          )}
        </ContentContainer>
        <Image
          src={post.coverImage}
          objectFit="cover"
          width={600}
          height={400}
          alt={post.title}
          quality={100}
        />
      </Container>
    </Link>
  )
}

export default PostCard
