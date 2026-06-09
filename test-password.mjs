import bcryptjs from 'bcryptjs';

const password = 'Ocala34474!';
const storedHash = '$2b$10$hlG4OagACoYcAvrETQTSCujMv3laOFqoZ7C6.m9Mk/orJXgzGZrZO';

const match = await bcryptjs.compare(password, storedHash);
console.log('Password match:', match);
