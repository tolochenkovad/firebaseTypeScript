import firebase from "firebase/app";

function getFirestore() {
  return firebase.firestore();
}

export function fetchCollection(collection: string): any {
  return getFirestore().collection(collection);
}

export function addDoc(collection: string, doc: any) {
  return fetchCollection(collection).add(doc);
}

export function deleteDoc(collection: string, docId: string) {
  return fetchCollection(collection)
    .doc(docId)
    .delete();
}
