import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { getAuth } from "firebase/auth";
import Spinner from "../components/Spinner";
import './animals.css';

export default function Other() {
    const auth = getAuth();
    const params = useParams();
    const [other, setOther] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      async function fetchOther() {
        const docRef = doc(db, "others", params.otherId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setOther(docSnap.data());
          setLoading(false);
        }
      }
      fetchOther();
    }, [params.otherId]);
    if (loading) {
      return <Spinner />;
    }
  return (
    <>
      <div className="bg-blue-100">
        <br /> <br />
        <div class="max-w-4xl bg-white rounded overflow-hidden shadow-lg mx-auto animal-card mb-5">
         <div className="container mx-auto flex justify-center rounded-2xl">
          <img
            className="h-96 object-cover mt-10 rounded-lg"
            loading="lazy"
            src={other.imgUrls[0]}
          />
        </div>
        <div className="text-center">
          <h1 className="category-name">Name:</h1>
          <hr></hr>
          <h3 className="animal-name">{other.name}</h3>
          <hr></hr>
          <p className="category-name">Characteristics:</p>
          <p className="animal-data">{other.characteristics}</p>
          <p className="category-name">Description:</p>
        </div>
        <div className="container">
          <p className="text-justify animal-data py-5">{other.description}</p>
        </div>
      </div>
      <br /><br />
    </div>
    </>
  )
}
