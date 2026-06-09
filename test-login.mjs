import fetch from 'node-fetch';

const response = await fetch('http://localhost:3000/api/admin/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'kholt@paxproperties.com',
    password: 'Ocala34474!'
  })
});

const data = await response.json();
console.log('Status:', response.status);
console.log('Response:', JSON.stringify(data, null, 2));
