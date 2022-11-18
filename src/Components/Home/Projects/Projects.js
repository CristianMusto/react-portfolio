import style from "./Projects.module.scss";
import CardProjects from "../../Helpers/Cards/CardProjects";
import { Element } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { Autoplay, EffectCoverflow } from "swiper";
import { useState, useEffect } from "react";

const Projects = () => {
    const [projectsContent, setProjectsContent] = useState([]);

    useEffect(() => {
        const projectsFetch = async () => {
        const data = await (
            await fetch(
            "https://cristianmusto.github.io/react-portfolio/json/cardsProjects.json"
            )
        ).json();

        setProjectsContent(data);

        };

        projectsFetch();
    }, []);
    return (
      <Element
        id="Projects"
        className={style.projectsContent}
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-offset="250"
      >
        <div className={style.projectsTitle}>
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
          >
            {projectsContent.length > 0 ? (
              projectsContent.map((el) => (
                <SwiperSlide
                  key={el.id}
                  className={`${style.projectsCard} ${style.swiperSlide}`}
                  style={{ boxShadow: `0 0 20px 10px ${el.shadow}` }}
                  
                >
                  <CardProjects
                    classNamePic={style.profilePic}
                    classNameSocials={style.socialIcons}
                    classNameIcon={style.icon}
                    src={el.logo}
                    href={el.link}
                    hrefIcon={el.link}
                    alt={`immage ${el.title}`}
                    title={el.title}
                    description={el.description}
                    credits={el.credits}
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

export default Projects;