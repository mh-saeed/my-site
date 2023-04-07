import delay from "@/lib/delay";

const getData = async (title: any) => {
  // const post = await getDataFromCMS(title);
  const post = await delay(5000);
  return { title };
};

const BlogPost = async ({ params }: { params: any }) => {
  const { title }: { title: string } = params;
  const post: any = await getData(title);

  return <div>{post.title}</div>;
};

export default BlogPost;
