import Layout from '../../componets/Layout';
import Link from 'next/link';
import styles from '../../styles/Users.module.css';
import Image from 'next/image';

const Users = (props) => {
  console.log(props);
  return (
    <Layout>
      <h1>Users</h1>
      {props.users.map((user) => (
        <Link key={user.id} href={`/users/${user.id}`}>
          <div className={styles.item}>
            <h3>{user.name}</h3>
          </div>
        </Link>
      ))}
    </Layout>
  );
};

export async function getServerSideProps(context) {
  let data = await fetch('https://jsonplaceholder.typicode.com/users');
  let users = await data.json();

  return {
    props: { users }, // will be passed to the page component as props
  };
}

export default Users;
