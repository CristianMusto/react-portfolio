import style from "./Knowledge.module.scss";
import CardKnowledge from "../../Helpers/Cards/CardKnowledge";
import { Element } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectCoverflow, Lazy } from "swiper";
import { useState, useEffect } from "react";

const Knowledge = (props) => {
  const [cardsContent, setCardsContent] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      const headers = new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      });
      const data = await (
        await fetch(
          "https://cristianmusto.github.io/react-portfolio/Assets/json/cardsKE.json",
          {
            headers: headers,
          }
        )
      ).json();
      setCardsContent(data);
    };

    dataFetch();
  }, []);

  return (
    <Element
      name="Knowledge"
      className={style.knowledgeContent}
      id="#knowledge"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-offset="250"
    >
      <div className={style.knowledgeText}>
        <h2>Knowledge</h2>
      </div>
      <div className={style.swiperSection}>
        <Swiper
          className={style.swiperContainer}
          slidesPerView="auto"
          modules={[EffectCoverflow, Autoplay, Lazy]}
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
        >
          {cardsContent.length > 0 ? (
            cardsContent.map((el) => (
              <SwiperSlide
                key={el.title}
                className={`${style.knowledgeCard} ${style.swiperSlide}`}
                style={{ boxShadow: `0 0 20px 10px ${el.shadow}` }}
              >
                <CardKnowledge
                  classNamePic={style.profilePic}
                  src={el.logo}
                  alt={`logo ${el.title}`}
                  title={el.title}
                  description={el.description}
                />
              </SwiperSlide>
            ))
          ) : (
            <h3>Something went wrong</h3>
          )}
        </Swiper>
      </div>
    </Element>
  );
};

export default Knowledge;