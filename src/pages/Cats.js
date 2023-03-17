import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { db } from "../firebase";
import './animals.css';

export default function Cats({cat, id}) {
  const [cats, setCats] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCats() {
      const catsRef = collection(db, "cats");
      const q = query(catsRef, orderBy("timestamp", "desc"));
      const querySnap = await getDocs(q);
      let cats = [];
      querySnap.forEach((doc) => {
        return cats.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setCats(cats);
      setLoading(false);
    }
    fetchCats();
  }, []);
  return (
    cats && (
      <div className="mx-auto">
        <h1 className='text-center footer-banner'>Cats For Adoption</h1>
          <div className="bg-purple-100">
            <div className="grid gap-2 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 container mx-auto px-4 py-4">
                {cats.map(({ data, id }) => (
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
                    <Link className="button-link cursor-pointer py-2 px-5" to={`/cat/${id}`}>See More</Link>                         
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>
        )
      )
    }
