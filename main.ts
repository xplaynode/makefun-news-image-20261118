// Entry for news-image-20261118: "Sum up 18 November's world news in one image".
// The poster is drawn ahead of time and stored beside this file as entry.png;
// at run time (no network, read-only repo) the program simply publishes it to
// the output directory as entry.png, byte for byte, so both grader runs agree.
//
// Local check:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);

// The grader provides a writable /output; locally MAKEFUN_OUTPUT_DIR may point
// at a folder that does not exist yet, so create it before copying.
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, 'entry.png'));
