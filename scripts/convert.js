import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const imgDir = '/Users/sunyanalungba/pixel&tint/public/assets';

const files = fs.readdirSync(imgDir);

for (const file of files) {
  if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg')) {
     const inputPath = path.join(imgDir, file);
     const outputPath = path.join(imgDir, path.basename(file, path.extname(file)) + '.webp');
     try {
        console.log(`Converting ${inputPath} to ${outputPath}...`);
        execSync(`cwebp "${inputPath}" -q 80 -o "${outputPath}"`, { stdio: 'inherit' });
     } catch (e) {
        console.error(`Failed to convert ${file}`);
     }
  }
}
