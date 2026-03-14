
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB0BSql846hMmBa_WYiwpTdc5MDWEmDHP8",
  authDomain: "fb-aut6.firebaseapp.com",
  projectId: "fb-aut6",
  storageBucket: "fb-aut6.firebasestorage.app",
  messagingSenderId: "908504345671",
  appId: "1:908504345671:web:d4d624f3c6a5c4612a5562"
};
// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Exportar o serviço de autenticação
export const auth = getAuth(app);

// Inicializar o Firestore
export const db = getFirestore(app);

// Inicializar Analytics somente no navegador para evitar erros em SSR
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { analytics };
export default app;
