import { addToDbIfNotExists, deleteUserByEmail } from '@/lib/db/ops';
import { gmailParser } from '@/lib/funcs/auth/gmail-parser';
import { v4 as uuidv4 } from 'uuid';

describe('addToDbIfNotExists', () => {
  let createdEmail: string;

  beforeEach(() => {
    createdEmail = uuidv4() + '@gmail.com';
  });

  it('should return true for a new user', async () => {
    const isNewUserAdded = await addToDbIfNotExists(gmailParser(createdEmail));
    expect(isNewUserAdded).toBe(true);
  });

  afterEach(async () => {
    await deleteUserByEmail(createdEmail);
  });
});
