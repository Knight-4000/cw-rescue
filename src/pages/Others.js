import { db } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";
import './animals.css'

export default function Others({other, id}) {
  const [others, setOthers] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchOthers() {
      const othersRef = collection(db, "others");
      const q = query(othersRef, orderBy("timestamp", "desc"));
      const querySnap = await getDocs(q);
      let others = [];
      querySnap.forEach((doc) => {
        return others.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setOthers(others);
      setLoading(false);
    }
    fetchOthers();
  }, []);
  return (
    others && (
      <div className="mx-auto">  
        <h1 className='text-center footer-banner'>Smaller Animals For Adoption</h1>
         <div className="bg-purple-100">
          <div className="grid gap-2 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 container mx-auto px-4 py-4">
           {others.map(({ data, id }) => (
            <div key={id}>
             <div
              style={{
                background: `url(${data.imgUrls[0]}) `,
                backgroundSize: "cover",
              }}
                className="animal-image"
              >
          </div>
          <p className="animal-name text-center text-xl mb-2">{data.name}</p>
          <p className="animal-char text-center text-xl mb-2">{data.characteristics}</p>
          <div className="text-center py-2">
            <Link className="button-link cursor-pointer py-2 px-5" to={`/other/${id}`}>See More</Link>
          </div>
        </div>
        ))}
      </div>
     </div>
   </div>
  )
 )
}
