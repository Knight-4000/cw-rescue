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

  const carouselList=[
    {
      id:"0",
      imgUrls:"https://firebasestorage.googleapis.com/v0/b/rescue-a2794.appspot.com/o/QjYrF30svVgcrXc1FKaaQWzyGLf1-kitten-1.jpg-7b79775a-dca9-4b0b-91c8-e408c04e1443?alt=media&token=d48ed53b-1307-4bd4-8fff-8fcd96adfeb4",
      description:"1,200+ adoptions in 2022",
    },{
      id:"1",
      imgUrls:"https://firebasestorage.googleapis.com/v0/b/rescue-a2794.appspot.com/o/QjYrF30svVgcrXc1FKaaQWzyGLf1-dog-1.jpg-32611807-8972-4c23-98aa-f853c3788887?alt=media&token=98955f78-407f-41aa-b827-1b8f1bc2b858",
      description:"40,000 animal lives saved",
    },{
      id:"2",
      imgUrls:"https://firebasestorage.googleapis.com/v0/b/rescue-a2794.appspot.com/o/QjYrF30svVgcrXc1FKaaQWzyGLf1-kitten-2.jpg-6c339c05-0e0d-40b7-a3b7-6c0bb1809f34?alt=media&token=63ef51e0-3306-47d3-ad65-a09a6480a344",
      description:"Be someone's hero",
    },
  
  ];
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
          {carouselList.map(({ data, id }) => (
            <SwiperSlide
            key={id}
          >
            <div
              style={{
                background: `url(${data.imgUrls[0]}) `,
                backgroundSize: "cover",
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