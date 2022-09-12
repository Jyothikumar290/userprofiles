import Head from 'next/head'
// import Image from 'next/image'
import UsersList from '../component/UsersList';
import styles from '../styles/Home.module.css'

export default function Home({users}) {
// console.log(users);
  return (
    <div>
      <Head>
        <title>User Profiles</title>
        <meta name="keywords" content='User Profiles, Profile Details'/>
        <meta name="Description" content='A user profile is a collection of settings and information associated with a user. It contains critical information that is used to identify an individual, ...'/>
      </Head>
         <div className={styles.container}>
         <h1 className={styles.title}>User Profile's <a href='/'>Applications</a></h1>
     </div>
     <UsersList users={users}/>
         </div>
  )
}


export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  return {
    props: {
      users,
    },
  }
}