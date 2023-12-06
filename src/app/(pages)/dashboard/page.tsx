'use client';

import { useState, useEffect } from 'react';
import SignInToCreate from '@/app/components/reusables/signin-to-create';
import ArtBoard from './board';
import { useSession } from 'next-auth/react';
import LoadingScreen from '@/app/loading';
import Signed from './signed';
function Page() {
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoading(false);
    }, 850); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen></LoadingScreen>;
  }

  if (session) {
    return (
      <>
        <ArtBoard></ArtBoard>
        <Signed></Signed>
      </>
    );
  }

  return (
    <>
      <SignInToCreate></SignInToCreate>
      <Signed></Signed>
    </>
  );
}

export default Page;
