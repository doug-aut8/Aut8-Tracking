
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBCRxSNGSphCWXWq2-YFE0EqFfil5n8rc8",
  authDomain: "clickprato-aut8-9acf7.firebaseapp.com",
  projectId: "clickprato-aut8-9acf7",
  storageBucket: "clickprato-aut8-9acf7.firebasestorage.app",
  messagingSenderId: "545112439011",
  appId: "1:545112439011:web:e21e31bb778a4e381fedd6",
  measurementId: "G-GR6ZZCVGX1"
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
