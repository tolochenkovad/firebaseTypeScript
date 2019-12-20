import firebase from "firebase/app";

const getFirestore = () => {
  return firebase.firestore();
};

export const getShapShot = (collect: string): any => {
  return new Promise(resolve => {
    getFirestore()
      .collection(collect)
      .onSnapshot(resolve);
  });
};

export const fetchCollection = (snapShot): any => {
  return snapShot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id,
  }));
};

export const addDoc = (collection: string, doc: any): any => {
  return getFirestore()
    .collection(collection)
    .add(doc);
};

export const deleteDoc = (collection: string, docId: string): any => {
  return getFirestore()
    .collection(collection)
    .doc(docId)
    .delete();
};
