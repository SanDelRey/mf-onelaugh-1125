import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const joke = "The scam caller asked if I was alone. I said yes, then asked if he wanted to be my emergency contact.";
const out = (process.env.MAKEFUN_OUTPUT_DIR || '/output').replace(/\/+$/, '');

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), joke);
