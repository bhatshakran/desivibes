import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { app, db } from './firebase';

const auth = getAuth(app);

// interface QuerySnapshot {
//   doc:
// }

export function signup(email: string, password: string) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...

      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorMessage);
      // ..
    });
}

export async function signin(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    return userCredential.user;
  } catch (err) {
    throw new Error('Authentication failed. Check your password');
  }
}

export async function getDocuments(type: string, tag?: string) {
  let q;
  if (tag) {
    q = query(collection(db, type), where('tag', 'array-contains', tag));
  } else {
    q = query(collection(db, type));
  }
  const querySnapshot: any | undefined = await getDocs(q);

  const returnArr: any = [];
  querySnapshot.forEach((doc: any) => {
    const id = doc._key.path.segments[doc._key.path.segments.length - 1];
    const newData = { ...doc.data(), id };
    returnArr.push(newData);
  });

  return returnArr;
}

export async function getDocument(collection: string, id: string) {
  const docRef = doc(db, collection, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    throw new Error('No such document');
  }

  // return returnArr;
}
