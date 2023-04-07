const Blog = () => {
  return <div>Blog</div>;
};

export default Blog;

export async function generateStaticParams() {
  return [{ slug: "learn-to-code" }, { slug: "angular-vs-react" }];
}
