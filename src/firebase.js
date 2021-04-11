import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAUdYpd1vs-RjV2fFWSbQrNj9bl56K23kk',
  authDomain: 'run-it-backs.firebaseapp.com',
  projectId: 'run-it-backs',
  storageBucket: 'run-it-backs.appspot.com',
  messagingSenderId: '618906537175',
  appId: '1:618906537175:web:af49a029d9ace2eb8bb492',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
