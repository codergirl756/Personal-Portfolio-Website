import fs from 'fs';
import path from 'path';

const dir = 'src/assets';
if (!fs.existsSync(dir)) {
    console.log('Directory not found:', dir);
    process.exit(1);
}

const files = fs.readdirSync(dir);
console.log('Files in src/assets:');
files.forEach(file => {
    console.log(`File: "${file}"`);
    if (file.includes('VaishuThakurResume')) {
        console.log('  Char codes:', file.split('').map(c => c.charCodeAt(0)));
        const oldPath = path.join(dir, file);
        const newPath = path.join(dir, 'VaishuThakurResume.pdf'); // Clean name

        if (file !== 'VaishuThakurResume.pdf') {
            try {
                fs.renameSync(oldPath, newPath);
                console.log('  SUCCESS: Renamed to VaishuThakurResume.pdf');
            } catch (e) {
                console.error('  ERROR renaming:', e.message);
            }
        } else {
            console.log('  File is already named correctly.');
        }
    }
});
