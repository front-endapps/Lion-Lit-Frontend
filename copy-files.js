import fs from 'fs/promises';  // Folosim 'fs/promises' pentru a lucra cu Promises
import path from 'path';

// Definirea căii către fișierul index.html din dist/
const indexPath = path.join(process.cwd(), 'dist', 'index.html');

async function updateIndexHtml() {
  try {
    // Citirea conținutului fișierului index.html
    const data = await fs.readFile(indexPath, 'utf8');

    // Modificarea liniei scriptului pentru a folosi calea corectă
    const updatedData = data.replace(
      /<script type="module" src="\.\/src\/lion-app.js"><\/script>/,
      '<script type="module" src="lion-app.js"></script>'
    );

    // Scrierea fișierului modificat înapoi în dist/
    await fs.writeFile(indexPath, updatedData, 'utf8');
    console.log('Fișierul index.html a fost actualizat cu succes!');
  } catch (err) {
    console.error('Eroare la procesarea fișierului index.html:', err);
  }
}

// Apelarea funcției pentru a actualiza index.html
updateIndexHtml();
