const { copyFileSync, mkdirSync } = require('node:fs');
const { join } = require('node:path');

const destination = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(destination, { recursive: true });
copyFileSync(join(__dirname, 'entry.png'), join(destination, 'entry.png'));
