import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/bundle";
import './carousel.css'
import { useNavigate } from "react-router-dom";
export default function Slider() {
  const [carousels, setCarousels] = useState(null);
  const [loading, setLoading] = useState(true);
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchCarousels() {
      const carouselsRef = collection(db, "carousels");
      const q = query(carouselsRef, orderBy("timestamp", "desc"), limit(3));
      const querySnap = await getDocs(q);
      let carousels = [];
      querySnap.forEach((doc) => {
        return carousels.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setCarousels(carousels);
      setLoading(false);
    }
    fetchCarousels();
  }, []);

  return (
    carousels && (
      <>
        <Swiper
          slidesPerView={1}
          loop={true}
          effect="fade"
          modules={[EffectFade]}
          autoplay={{ delay: 5000 }}
        >
          {carousels.map(({ data, id }) => (
            <SwiperSlide
            key={id}
          >
            <div
              style={{
                background: `url(${data.imgUrls[0]}) `,
                backgroundSize: "cover",
                backgroundPosition: "left center",
              }}
              className="carousel-image swiper-slide-active relative w-full overflow-hidden" 
            >
              <p className="carousel-message text-center">
                {data.description}
              </p>
            </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    )
  );
}