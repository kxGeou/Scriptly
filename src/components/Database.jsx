import React, { useEffect, useState } from 'react';
import { db } from '../firebase.js';
import { collection, getDocs } from 'firebase/firestore';

function Database() {
    const [kursy, setKursy] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
          const querySnapshot = await getDocs(collection(db, "Kursy"));
          const coursesList = querySnapshot.docs.map(doc => doc.data());
          setKursy(coursesList);
        };
    
        fetchCourses();
      }, []);

      return (
        <div>
          <h1>kursy</h1>
          <ul>
            {kursy.map((kursy, index) => (
              <li key={index}>
                <h3>{kursy.Opis}</h3>
                <p>{kursy.Tytuł}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    };

export default Database
