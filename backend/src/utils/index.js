import fs from 'fs';
import path from 'path';

export function loadJSON(fileName) {
    const filePath = path.join(process.cwd(), 'src/data', fileName);
    const rawData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(rawData);
}