'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
import LoadingScreen from '@/app/loading';

function Page() {
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        YOU&apos;RE LOGGED IN CHAMP
        <br />
        YOUR INFO:
        <br />
        SESSION EXPIRATION DATE: {session.expires}
        <br />
        E-MAIL: {session.user?.email}
        <br />
        NAME: {session.user?.name}
        <br />
        IMAGE:{' '}
        <Image
          height={200}
          width={100}
          alt="AVATAR"
          src={session.user?.image as string}
        ></Image>
        <br />
        <button
          className="btn btn-light"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => signOut()}
        >
          Signout
        </button>
      </div>
    );
  }
  return (
    <div>
      PLEASE LOG IN
      <button
        className="btn btn-light"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => signIn('github')}
      >
        signin with Github
      </button>
      <button
        className="btn btn-light"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => signIn('google')}
      >
        signin with Google
      </button>
    </div>
  );
}

export default Page;
