import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../firebase";
import './animals.css';

export default function Dog({ dog, id}) {
    const params = useParams();
    const [dogs, setDogs] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      async function fetchDogs() {
        const dogsRef = collection(db, "dogs");
        const q = query(dogsRef, orderBy("timestamp", "desc"));
        const querySnap = await getDocs(q);
        let dogs = [];
        querySnap.forEach((doc) => {
          return dogs.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setDogs(dogs);
        setLoading(false);
      }
      fetchDogs();
    }, []);

    return (
      dogs && (
      <div classname="container mx-auto">
        <h1 className='text-center footer-banner'>Dogs For Adoption</h1>
          <div className="bg-purple-100">
            <div className="grid gap-2 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 container mx-auto px-4 py-4">
              {dogs.map(({ data, id }) => (
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
                    <p className="animal-char text-center text-xl mb-2">{data.persona}</p>
                    <div className="text-center py-2">
                     <Link className="button-link cursor-pointer py-2 px-5" to={`/dog/${id}`}>See More</Link>
                    </div>
                  </div>
                 ))}
               </div>
              </div>
            </div>
          )
        )
      }
