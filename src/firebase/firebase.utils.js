import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBJ5N2uI8Iq3jXPZMO9HvJ4yhTFPm11LKw",
    authDomain: "crown-clothing-9858e.firebaseapp.com",
    databaseURL: "https://crown-clothing-9858e.firebaseio.com",
    projectId: "crown-clothing-9858e",
    storageBucket: "crown-clothing-9858e.appspot.com",
    messagingSenderId: "651415557479",
    appId: "1:651415557479:web:acc46d47ae10e623b94bc2",
    measurementId: "G-7PFYCQNEK4"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get(); 

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch(error) {
      console.error('error creating user', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider).then((result) => {
    console.log(result);
  }, (error) => {
    console.error(error)
});

export default firebase;