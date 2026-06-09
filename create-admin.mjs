import { db } from './server/db/client.js';
import { adminUsers } from './server/db/schema.js';
import bcrypt from 'bcryptjs';

async function createAdmin() {
  try {
    const email = 'kholt@paxproperties.com';
    const password = 'Ocala34474!';
    const fullName = 'K Holt';
    const username = 'kholt';

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user
    const result = await db.insert(adminUsers).values({
      email,
      username,
      passwordHash: hashedPassword,
      fullName,
      role: 'admin',
      isActive: true,
    });

    console.log('Admin user created successfully!');
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Role: admin');
  } catch (error) {
    console.error('Error creating admin user:', error);
    process.exit(1);
  }
}

createAdmin();
