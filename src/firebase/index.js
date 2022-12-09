import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDc_ef75DkvjCoNkOSue3ALsYHPFBUmKtg',
  authDomain: 'h-ftec.firebaseapp.com',
  projectId: 'h-ftec',
  storageBucket: 'h-ftec.appspot.com',
  messagingSenderId: '439320935304',
  appId: '1:439320935304:web:63b97c925e06dc49f1183d'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app }