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

      const [form,setForm] = useState("")

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)
      }
      return (
        <div>
          <ul>
            {kursy.map((kursy, index) => (
              <li key={index}>
                <h3>{kursy.Opis}</h3>
                <p>{kursy.Tytuł}</p>
              </li>
            ))}
          </ul>

          <form onSubmit={handleSubmit}>
            <input className='bg-red-600' onChange={(e) => setForm(e.target.value)}></input>
            <button type='submit'>Submit</button>
          </form>

          

        </div>
      );
    };

export default Database
