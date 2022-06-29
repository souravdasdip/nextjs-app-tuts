import { useRouter } from 'next/router';

const Blog = () => {
  const router = useRouter();
  const { blogid } = router.query;
  return (
    <>
      <h1>Blog - {blogid}</h1>
    </>
  );
};

export default Blog;
