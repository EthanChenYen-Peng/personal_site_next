import { getAllPosts } from '@/api/posts';
function Projects() {
  return (
      <div>Projects</div>
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
