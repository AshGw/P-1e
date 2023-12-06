import {
  addCreditToUser,
  addToDbIfNotExists,
  deleteUserByEmail,
} from '@/lib/db/ops';
import { v4 as uuidv4 } from 'uuid';

describe('addCreditToUser', () => {
  let createdEmail: string;

  beforeEach(async () => {
    createdEmail = uuidv4() + '@gmail.com';
    await addToDbIfNotExists(createdEmail);
  });

  it('should add credits to the user', async () => {
    const amountToAdd = 50;
    const result = await addCreditToUser(createdEmail, amountToAdd);

    expect(result).toBe(true);
  });

  it('should return null for non-existent user', async () => {
    const nonExistentUserEmail = 'x' + createdEmail;
    const amountToAdd = 50;
    const result = await addCreditToUser(nonExistentUserEmail, amountToAdd);

    expect(result).toBe(null);
  });
  afterEach(async () => {
    await deleteUserByEmail(createdEmail);
  });
});
