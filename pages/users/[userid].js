import { useRouter } from 'next/router';
import Layout from '../../componets/Layout';

const User = ({ user }) => {
  const router = useRouter();
  const { userid } = router.query;
  console.log({ user });
  return (
    <Layout>
      <h1>User - {userid}</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone no.: {user.phone}</p>
      <p>City: {user.address.city}</p>
      <p>Company name.: {user.company.name}</p>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { userid } = context.query;
  console.log({ userid });
  let data = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userid}`
  );
  let user = await data.json();

  return {
    props: { user }, // will be passed to the page component as props
  };
}

export default User;
