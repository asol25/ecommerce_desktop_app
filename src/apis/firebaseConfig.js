import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Initialize Firebase
const app = initializeApp({
  apiKey: 'AIzaSyDSEge0CQkRNhEhx-tcIdgIyLdgCW8BgAM',
  authDomain: 'images-services-52149.firebaseapp.com',
  databaseURL: 'https://images-services-52149.firebaseio.com',
  projectId: 'images-services-52149',
  storageBucket: 'gs://images-services-52149.appspot.com',
  messagingSenderId: '388061356865',
});

const storage = getStorage(app);
export default storage;
