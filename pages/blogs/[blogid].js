import { useRouter } from 'next/router';
import Layout from '../../componets/Layout';

const Blog = () => {
  const router = useRouter();
  const { blogid } = router.query;
  return (
    <Layout>
      <h1>Blog - {blogid}</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem nulla
        repudiandae sint facilis, sunt corrupti numquam id illo. Ut deserunt
        animi iste voluptatum! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Repellendus maxime rem earum repudiandae, cum possimus
        quae assumenda nulla culpa. Odit architecto repellendus non, unde
        recusandae placeat nisi perferendis quod nesciunt! Dolorum sapiente et
        sint consequuntur earum blanditiis iusto reprehenderit molestiae quia
        eligendi? Exercitationem, officia nobis!
      </div>
    </Layout>
  );
};

export default Blog;
