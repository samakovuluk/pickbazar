import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
// the redirect will only happen on the client-side. This is by design,
const Index: React.FC = () => {
  const router = useRouter();
  React.useEffect(() => {
    router.replace('/grocery');
  });
  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};

export default Index;
