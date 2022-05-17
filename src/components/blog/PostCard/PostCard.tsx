import Link from 'next/link'
import Image from 'next/image'
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
      <div className="duration-400 my-12 flex cursor-pointer flex-col-reverse justify-between gap-5 rounded-xl bg-primary p-8 text-secondary transition-transform hover:scale-105 lg:flex-row">
        <div className="flex flex-col items-start justify-between gap-5 lg:w-1/2">
          <h2 className="text-2xl font-semibold lg:py-4 lg:text-4xl">
            {post.title}
          </h2>
          <p className="text-xl">{post.excerpt}</p>
          {post.projectUrl ? (
            <button
              onClick={handleProjectLinkClick}
              className="rounded-md bg-secondary py-3 px-3 font-medium text-primary transition-transform hover:scale-105"
            >
              <Link href={post.projectUrl}>
                <a target="_blank">View Project</a>
              </Link>
            </button>
          ) : (
            <Spacer />
          )}
        </div>
        <Image
          src={post.coverImage}
          objectFit="contain"
          width={550}
          height={400}
          alt={post.title}
          quality={100}
        />
      </div>
    </Link>
  )
}

export default PostCard
