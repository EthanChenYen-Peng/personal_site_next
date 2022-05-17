import path from 'path'
import fs from 'fs'
import { sync } from 'glob'
import matter from 'gray-matter'
import sizeOf from 'image-size'

const POSTS_PATH = path.join(process.cwd(), 'projects')

export const getSlugs = (): string[] => {
  const paths = sync(`${POSTS_PATH}/*.mdx`)

  return paths.map((path) => {
    const parts = path.split('/')
    const fileName = parts[parts.length - 1]
    const [slug] = fileName.split('.')
    return slug
  })
}

export const getAllPosts = (postType: PostType = PostType.BLOG) => {
  const posts = getSlugs()
    .map((slug) => getPostFromSlug(slug))
    .filter((post: Post) => post.meta.type === postType)
    .sort((a, b) => {
      const aStr = new Date(a.meta.createdAt)
      const bStr = new Date(b.meta.createdAt)
      if (aStr > bStr) return 1
      if (aStr < bStr) return -1
      return 0
    })
    .reverse()
  console.log(
    posts.map((post) => {
      return {
        created: post.meta.createdAt,
        title: post.meta.title,
      }
    })
  )
  return posts
}

export interface Post {
  content: string
  meta: PostMeta
}

export enum PostType {
  PROJECT = 'project',
  BLOG = 'blog',
}
export interface PostMeta {
  excerpt: string
  slug: string
  title: string
  tags: string[]
  createdAt: string
  coverImage: string
  projectUrl?: string
  type: PostType
}

export const getPostFromSlug = (slug: string): Post => {
  const postPath = path.join(POSTS_PATH, `${slug}.mdx`)
  const source = fs.readFileSync(postPath)
  const { content, data } = matter(source)

  return {
    content,
    meta: {
      slug,
      excerpt: data.excerpt ?? '',
      title: data.title ?? slug,
      tags: (data.tags ?? []).sort(),
      createdAt: (data.created ?? new Date()).toString(),
      coverImage: data.image,
      projectUrl: data.project_url ?? '',
      type: data.type ?? PostType.BLOG,
    },
  }
}

export type ImageSize = {
  height: number
  width: number
  image: string
}
export const getBlogImageSizes = (slug: string): ImageSize[] => {
  const imagePath = path.join('public/images', slug)

  const images = sync(`${imagePath}/*.{png,jpg,svg}`)

  return images.map((image) => {
    const imageSize = sizeOf(image) as { height: number; width: number }
    return {
      image,
      ...imageSize,
    }
  })
}
