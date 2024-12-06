import fs from 'fs/promises';  // Folosește 'fs/promises' pentru a lucra cu Promises
import path from 'path';

const indexPath = path.join(process.cwd(), 'dist', 'index.html');

// Verifică dacă fișierul există înainte de a-l modifica
async function updateIndexHtml() {
  try {
    // Verifică dacă fișierul există
    await fs.access(indexPath);

    const data = await fs.readFile(indexPath, 'utf8');

    const updatedData = data.replace(
      /<script type="module" src="\.\/src\/lion-app.js"><\/script>/,
      '<script type="module" src="lion-app.js"></script>'
    );
  
    await fs.writeFile(indexPath, updatedData, 'utf8');
    console.log('Fișierul index.html a fost actualizat cu succes!');
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error('Fișierul index.html nu a fost găsit în dist!');
    } else {
      console.error('Eroare la procesarea fișierului index.html:', err);
    }
  }
}

updateIndexHtml();
