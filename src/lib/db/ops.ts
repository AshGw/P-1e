import { prisma } from './client';
import { isGmail, gmailParser } from '../funcs/auth/gmail-parser';

export async function addToDbIfNotExists(email: string) {
  try {
    let rawEmail = email;
    if (isGmail(email)) {
      rawEmail = gmailParser(email);
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: rawEmail },
    });

    if (!existingUser) {
      await prisma.user.create({
        data: {
          email: rawEmail,
          accountCredit: 100,
        },
      });
      return true;
    }

    return false;
  } catch (error) {
    return error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function deleteUserByEmail(email: string) {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      await prisma.user.delete({
        where: { email },
      });
      return true;
    }

    return false;
  } catch (error) {
    return error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function removeCreditsFromUser(email: string, amount: number) {
  try {
    let rawEmail = email;
    if (isGmail(email)) {
      rawEmail = gmailParser(email);
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: rawEmail },
    });

    if (existingUser) {
      if (existingUser.accountCredit >= amount) {
        await prisma.user.update({
          where: { email: rawEmail },
          data: {
            accountCredit: {
              decrement: amount,
            },
          },
        });

        return true; // User indeed exists and subtracted credit
      } else {
        return false; // User exists, but not enough credits to decrement
      }
    }

    return null; // User does not even exist "Rare case if this happen u messed up some logic G"
  } catch (error) {
    return error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function addCreditToUser(email: string, amount: number) {
  try {
    let rawEmail = email;
    if (isGmail(email)) {
      rawEmail = gmailParser(email);
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: rawEmail },
    });

    if (existingUser) {
      await prisma.user.update({
        where: { email: rawEmail },
        data: {
          accountCredit: {
            increment: amount,
          },
        },
      });

      return true; // User indeed exists and added credit
    }

    return null; // User does not exist
  } catch (error) {
    return error;
  } finally {
    await prisma.$disconnect();
  }
}
