import admin from 'firebase-admin';
import { readFileSync } from 'fs'; // Importar o módulo fs para ler o arquivo JSON

// Carregar o arquivo JSON manualmente
const serviceAccount = JSON.parse(readFileSync(new URL('./serviceAccountKey.json', import.meta.url), 'utf8'));

// Inicializar o Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://diabetes-agendor-default-rtdb.firebaseio.com/"
});

const db = admin.firestore();

export { db };
