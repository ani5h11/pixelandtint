import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, 'public/assets/heroimage-low.webp');
const outputPath = path.join(__dirname, 'public/assets/heroimage-low-optimized.webp');

async function optimizeImage() {
    try {
        const info = await sharp(inputPath)
            .webp({ quality: 40 }) // Reduce quality further to save space, standard is 80
            .toFile(outputPath);
        console.log('Image optimized!', info);

        // overwrite original
        fs.renameSync(outputPath, inputPath);
        console.log('Original replaced.');
    } catch (err) {
        console.error('Error optimizing image:', err);
    }
}

optimizeImage();
