import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { app, db } from './firebase';
import { v4 as uuid } from 'uuid';

const auth = getAuth(app);

export async function signup(email: string, password: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    const token = await userCredential.user.getIdToken();
    return { user: userCredential.user, token };
  } catch (error) {
    throw new Error('Signup failed. try again');
  }
}

export async function signin(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const token = await userCredential.user.getIdToken();
    return { user: userCredential.user, token };
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

export async function getLoggedInUser() {
  const auth = getAuth();

  let getUser;

  console.log(auth.currentUser);

  return getUser;
}

export async function createOrderInDb(data: any) {
  const unique_id = uuid();
  await setDoc(doc(db, 'orders', unique_id), data);
  const getOrder = getDocument('orders', unique_id);
  return getOrder;
}

export async function getUserOrders(email: string) {
  const citiesRef = collection(db, 'orders');
  const q = query(citiesRef, where('buyerEmail', '==', email));
  const querySnapshot: any | undefined = await getDocs(q);
  const returnArr: any = [];
  querySnapshot.forEach((doc: any) => {
    const id = doc._key.path.segments[doc._key.path.segments.length - 1];
    const newData = { ...doc.data(), id };
    returnArr.push(newData);
  });

  return returnArr;
}
