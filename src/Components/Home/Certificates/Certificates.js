import style from "./Certificates.module.scss";
import CardCertificate from "../../Helpers/Cards/CardCertificate";
import { Element } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { Autoplay, EffectCoverflow } from "swiper";
import { useState, useEffect } from "react";

const Certificates = () => {
  const [certificateContent, setCertificateContent] = useState([]);

  useEffect(() => {
      const certificateFetch = async () => {
      const data = await (
          await fetch(
          "https://cristianmusto.github.io/react-portfolio/json/cardsCertificate.json"
          )
      ).json();

      setCertificateContent(data);

      };

      certificateFetch();
  }, []);
  return (
    <Element
      id="Certificates"
      className={style.certificateContent}
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-offset="250"
    >
      <div className={style.certificateTitle}>
        <h2 className={style.title}>Projects</h2>
      </div>
      <div className={style.swiperSection}>
        <Swiper
          className={style.swiperContainer}
          slidesPerView="auto"
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          preloadImages={true}
          updateOnImagesReady={true}
          grabCursor={true}
          centeredSlides={true}
          loop={false}
          autoHeight={true}
        >
          {certificateContent.length > 0 ? (
            certificateContent.map((el) => (
              <SwiperSlide
                key={el.id}
                className={`${style.projectsCard} ${style.swiperSlide}`}
                style={{ boxShadow: `0 0 20px 10px ${el.shadow}` }}
                
              >
                <CardCertificate
                  classNamePic={style.profilePic}
                  classNameSocials={style.socialIcons}
                  classNameIcon={style.icon}
                  src={el.logo}
                  href={el.link}
                  hrefIcon={el.link}
                  alt={`immage ${el.title}`}
                  title={el.title}
                  description={el.description}
                />
              </SwiperSlide>
            ))
          ) : (
            <h3>Coming Soon...</h3>
          )}
        </Swiper>
      </div>
    </Element>
  );
} 
  
  export default Certificates;