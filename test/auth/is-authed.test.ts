// This test is not to be ran in GitHub workflows, only in pre-push hooks

import * as  dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname + './../../.env') });

const ENDPOINT = process.env.NEXTAUTH_URL as string  + '/api/user/session';
const API_KEY = process.env.CLIENT_SESSION_VALIDITY_TEST_KEY as string;

describe('Check from the client side if the user session is valid', () => {
  it('should return isValid true with valid API key', async () => {
    const response = await fetch(ENDPOINT, {
      headers: {
        Authorization: API_KEY as string,
      },
    });
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.isValid).toBe(true);
  });

  it('should return isValid false without valid API key', async () => {
    const response = await fetch(ENDPOINT);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.isValid).toBe(false);
  });
});
