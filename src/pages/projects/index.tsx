import  Link from 'next/link'
import { getAllPosts, PostMeta } from '@/api/posts';
interface Props {
  posts: PostMeta[]
}
function Projects({posts}: Props) {
  return (
    <div>Projects
     <ul>
     </ul>
      {posts.map((post)=> (
       <li>
          <Link href={`/projects/${post.slug}`} >
            {post.title}
          </Link>
        </li>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()
  .slice(0, 9)
.map((post) => post.meta);
console.log(posts)

return { props: { posts } };
}
export default Projects
