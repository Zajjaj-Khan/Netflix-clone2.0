import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCLpvVszB6KGZtfAU3QN0YnLCNwU9XPyBM",
    authDomain: "netflix-colne-2.firebaseapp.com",
    projectId: "netflix-colne-2",
    storageBucket: "netflix-colne-2.appspot.com",
    messagingSenderId: "684207271482",
    appId: "1:684207271482:web:b6c65e968a2ad4fa08cf03"
  };
  
  const app = initializeApp(firebaseConfig);
  const db =getFirestore(app);
  const auth = getAuth(app)

  export { auth, db };