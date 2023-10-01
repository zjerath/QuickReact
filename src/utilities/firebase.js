import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref, update} from 'firebase/database';
import { useCallback, useEffect, useState } from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyAobHLEHQ8qhbJQR1NAoatnIUUn-8hk7BI",
    authDomain: "quickreact-ea95e.firebaseapp.com",
    databaseURL: "https://quickreact-ea95e-default-rtdb.firebaseio.com",
    projectId: "quickreact-ea95e",
    storageBucket: "quickreact-ea95e.appspot.com",
    messagingSenderId: "531452138536",
    appId: "1:531452138536:web:bdf5fdef9e3063ea97911d",
    measurementId: "G-SVH1LP2G5H"
};  

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const useDbData = (path) => {
    const [data, setData] = useState();
    const [error, setError] = useState(null);
  
    useEffect(() => (
      onValue(ref(database, path), (snapshot) => {
       setData( snapshot.val() );
      }, (error) => {
        setError(error);
      })
    ), [ path ]);
  
    return [ data, error ];
};
  
const makeResult = (error) => {
    const timestamp = Date.now();
    const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
    return { timestamp, error, message };
};
  
export const useDbUpdate = (path) => {
    const [result, setResult] = useState();
    const updateData = useCallback((value) => {
      update(ref(database, path), value)
      .then(() => setResult(makeResult()))
      .catch((error) => setResult(makeResult(error)))
    }, [database, path]);
  
    return [updateData, result];
};
  