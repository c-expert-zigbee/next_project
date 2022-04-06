import Head from "next/head";
import Profile from "../../components/profile/Profile";

export default function ProfilePage() {
  return (
    <>
      <Head>
        <title>Profile | Artcryption</title>
        <meta name="description" content="Artcryption profile page" />
        <link rel="icon" href="/favicon.ico" />
        <link href="../../styles/fonts/Kern Regular.otf" rel="stylesheet" />
      </Head>

      <Profile />
    </>
  );
}
