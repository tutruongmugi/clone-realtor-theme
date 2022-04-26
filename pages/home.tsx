import type { NextPage } from "next";
import Head from "next/head";
import UserProfileMinimal from "../src/components/pages/home/UserProfileMinimal";
import { User } from "../src/interface";
import Layout from "../src/layouts/Layout";

const Home: NextPage = () => {
  const users: User[] = [
    { name: "Le Van Tu", age: "20" },
    { name: "Truong Quang Tu", age: "40" },
    { name: "Truong Quang Tu", age: "40" },
    { name: "Truong Quang Tu", age: "40" },
    { name: "Truong Quang Tu", age: "40" },
    { name: "Truong Quang Tu", age: "40" },
    { name: "Truong Quang Tu", age: "40" },
    { name: "Truong Quang Tu", age: "40" },
  ];

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {users.map((user) => (
          <UserProfileMinimal userData={user} key={user.name} />
        ))}
      </Layout>
    </div>
  );
};

export default Home;
