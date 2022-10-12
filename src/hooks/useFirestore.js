import { useState, useEffect } from "react";
import { db } from "../Configs/firebase";
import { collection, orderBy, onSnapshot, query } from "firebase/firestore";

const useFirestore = (collectionRef) => {
  // state to keep track of docs in the collection
  const [docs, setDocs] = useState([]);

  //   function to get and set documents from firestore
  const getSetDocs = async (collectionRef) => {
    const getDocsQuery = query(
      collection(db, collectionRef),
      orderBy("createdAt", "desc")
    );
    const unsub = onSnapshot(getDocsQuery, (snapshot) => {
      let documents = [];

      // storing each doc in array
      snapshot.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });

      // storing the documents in the state
      setDocs(documents);
    });

    // clean up function for unsbscribing
    return () => unsub();
  };

  //   getting the docs from db
  useEffect(() => {
    getSetDocs(collectionRef);
  }, [collectionRef]);

  return { docs };
};

export default useFirestore;
