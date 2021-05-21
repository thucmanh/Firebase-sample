import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBhSlGxvNLlKpHyfC7wlAaIK7CoZzDhMAM",
    authDomain: "fir-sample-f3651.firebaseapp.com",
    projectId: "fir-sample-f3651",
    storageBucket: "fir-sample-f3651.appspot.com",
    messagingSenderId: "712146105096",
    appId: "1:712146105096:web:b1a8cf609ac13e1b9ff2bd"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;

export const getFirebaseItems = async () => {
  try {
    const snapshot = await db
      .collection("todos")
      .get();
    const items = snapshot.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id })
    );
    return items;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export const addFirebaseItem = async (item) => {
  try {
    const todoRef = db.collection("todos");
    await todoRef.add(item);
  } catch (err) {
    console.log(err);
  }
}

export const updateFirebaseItem = async (item, id) => {
  try {
    const todoRef = db.collection("todos").doc(id);
    await todoRef.update(item);
  } catch (err) {
    console.log(err);
  }
}

export const clearFirebaseItem = async (item) => {
  const todoRef = db.collection("todos").doc(item.id);
  await todoRef.delete().then(function () {
  }).catch(function (err) {
    console.log(err);
  });
};

export const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: "/",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
}

export const storeUserInfo = async (user) => {
    const { uid } = user;
    const userDoc = await db.collection("users").doc(uid).get();
    if (!userDoc.exists) {
      await db.collection("users").doc(uid).set({ name: user.displayName });
      return {
        name: user.displayName,
        id: uid,
      };
    } else {
      return {
        id: uid,
        ...userDoc.data(),
      };
    }
}
  
export const updateUser = async (user, image) => {
    try {
        const userDoc = await firebase.firestore().collection("users").doc(user.id).get();
        if (userDoc.exists) {
        await firebase.firestore().collection("users").doc(user.id).update({ ...userDoc.data(), image: image });
        }
    } catch (err) {
        console.log(err);
    }
}
  