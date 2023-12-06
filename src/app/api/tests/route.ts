import { cookies } from 'next/headers';
import { getSession } from 'next-auth/react';

export async function GET(req: Request) {
  try {
    const session = await getSession();
    const cookieStore = cookies();
    const token = cookieStore.get('next-auth.session-token');
    let signedIn = false;
    if (session) {
      signedIn = true;
    }

    let ress = {
      yourToken: token || 'none',
      env: process.env.NODE_ENV,
      isSignedIn: signedIn,
    };
    return Response.json(ress);
  } catch (e) {
    console.log(e);
    return Response.json({ error: 'An error occurred' });
  }
}
