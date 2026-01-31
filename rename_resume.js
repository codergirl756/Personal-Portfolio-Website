import fs from 'fs';
import path from 'path';

const dir = 'src/assets';
const files = fs.readdirSync(dir);

files.forEach(file => {
    if (file.startsWith('VaishuThakurResume') && file.endsWith('.pdf')) {
        const oldPath = path.join(dir, file);
        const newPath = path.join(dir, 'VaishuThakurResume.pdf');
        if (file !== 'VaishuThakurResume.pdf') {
            console.log(`Renaming "${file}" to "VaishuThakurResume.pdf"`);
            fs.renameSync(oldPath, newPath);
        } else {
            console.log('File is already named correctly.');
        }
    }
});
