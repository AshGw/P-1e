import { getServerSession } from 'next-auth';


export async function GET(req: Request) {
  const API_KEY = req.headers.get('Authorization');

  let session = await getServerSession();
  try {
    if (session || API_KEY === process.env.CLIENT_SESSION_VALIDITY_TEST_KEY as string) {
      return Response.json({
        isValid: true,
      });
    }
    return Response.json({
        isValid: false,
    });
  } catch (e) {
    return Response.json({error: "server side error occurred" });
  }
}

