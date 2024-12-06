import fs from 'fs/promises';
import path from 'path';

// Calea către fișierul index.html rezultat după build
const indexPath = path.join(process.cwd(), 'dist', 'index.html');

async function updateIndexHtml() {
    try {
        // Citește conținutul fișierului index.html
        const data = await fs.readFile(indexPath, 'utf8');

        // Înlocuiește referința incorectă
        const updatedData = data.replace(
            /<script type="module" src="\.\.\/src\/lion-app.js"><\/script>/,
            '<script type="module" src="lion-app.js"></script>'
        );

        // Scrie înapoi fișierul index.html cu referința corectă
        await fs.writeFile(indexPath, updatedData, 'utf8');
        console.log('Fișierul index.html a fost actualizat cu succes!');
    } catch (err) {
        console.error('Eroare la procesarea fișierului index.html:', err);
    }
}

updateIndexHtml();
