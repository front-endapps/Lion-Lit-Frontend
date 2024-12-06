// copy-files.js
import fs from 'fs-extra';

fs.copySync('index.html', 'dist/index.html');
console.log('index.html copied to dist');
