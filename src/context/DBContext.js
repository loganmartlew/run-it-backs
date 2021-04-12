import React, { useState, useEffect, useContext } from 'react';
import firebase from '../firebase';

export const DBContext = React.createContext(undefined);

export const useDB = () => {
  return useContext(DBContext);
};

export const DBProvider = ({ children }) => {
  const [ribTypes, setRibTypes] = useState();
  const [totalRibs, setTotalRibs] = useState(0);
  const [loading, setLoading] = useState(false);

  const ribTypesRef = firebase.firestore().collection('ribtype');

  const sortTypes = types => {
    const peopleTypes = types.filter(type => type.person === true);
    peopleTypes.sort((a, b) => +b.count - +a.count);

    const otherTypes = types.filter(type => type.person !== true);
    otherTypes.sort((a, b) => +b.count - +a.count);

    return [...peopleTypes, ...otherTypes];
  };

  useEffect(() => {
    const ribTypesRef = firebase.firestore().collection('ribtype');

    setLoading(true);

    ribTypesRef.onSnapshot(querySnapshot => {
      const types = [];

      querySnapshot.forEach(doc => {
        types.push({ ...doc.data(), id: doc.id });
      });

      setRibTypes(sortTypes(types));

      const total = types.reduce((totalCount, type) => {
        return totalCount + type.count;
      }, 0);

      setTotalRibs(total);

      setLoading(false);
    });
  }, []);

  const addType = (name, count, person) => {
    ribTypesRef.doc(name).set({
      name,
      count: +count,
      person,
    });
  };

  const deleteType = id => {
    ribTypesRef.doc(id).delete();
  };

  const increment = id => {
    const localType = ribTypes.find(type => type.id === id);

    ribTypesRef.doc(id).update({ count: localType.count + 1 });
  };

  const decrement = id => {
    const localType = ribTypes.find(type => type.id === id);

    ribTypesRef.doc(id).update({ count: localType.count - 1 });
  };

  const value = {
    ribTypes,
    totalRibs,
    loading,
    addType,
    deleteType,
    increment,
    decrement,
  };

  return (
    <DBContext.Provider value={value}>
      {!loading && children}
    </DBContext.Provider>
  );
};
