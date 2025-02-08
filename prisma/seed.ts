import { hashSync } from 'bcrypt';
import { prisma } from './prisma-client';

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'User',
        email: 'user@gmail.com',
        password: hashSync('asdasd', 10),
        verified: new Date(),
        role: 'USER',
      },
      {
        fullName: 'Admin',
        email: 'admin@gmail.com',
        password: hashSync('asdasd', 10),
        verified: new Date(),
        role: 'ADMIN',
      },
    ],
  });
}

async function down() {}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}
