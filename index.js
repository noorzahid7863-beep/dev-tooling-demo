require('dotenv').config();

const port = process.env.PORT || 3000;
const environment = process.env.APP_ENV || 'Production';

console.log('-------------------------------------------');
console.log('🚀 Developer Tooling Setup Executed');
console.log(`🌐 Running on Port: ${port}`);
console.log(`🔧 Environment:   ${environment}`);
console.log('-------------------------------------------');