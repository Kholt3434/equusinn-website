import { spawn } from 'child_process';

// Start Express server on port 5173
const server = spawn('node', ['--loader', 'tsx', 'server/index.ts'], {
  env: { ...process.env, PORT: '5173' },
  stdio: 'inherit'
});

server.on('error', (err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

server.on('exit', (code) => {
  console.log(`Server exited with code ${code}`);
  process.exit(code);
});
