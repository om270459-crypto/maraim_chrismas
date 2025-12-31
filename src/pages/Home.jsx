import { motion } from 'framer-motion';
import { useEffect } from 'react';
import gsap from 'gsap';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.from('.home__img-11', { opacity: 0, y: 100, duration: 0.8 }, 0.1)
      .from('.home__img-14', { opacity: 0, y: 100, duration: 0.8 }, 0.3)
      .from('.home__img-15', { opacity: 0, y: 100, duration: 0.8 }, 0.5)
      .from('.home__img-16', { opacity: 0, y: 100, duration: 0.8 }, 0.7)
      .from('.home__img-10', { opacity: 0, y: 150, duration: 1, ease: 'back.out(1.5)' }, 1)
      .from('.home__img-5', { opacity: 0, y: 150, duration: 1, ease: 'elastic.out(1, 0.5)' }, 1.3)
      .from('.home__img-8', { opacity: 0, y: 150, duration: 1, ease: 'elastic.out(1, 0.5)' }, 1.6)
      .from('.home__img-3', { opacity: 0, x: -80, rotation: -15, duration: 0.8, ease: 'back.out(1.5)' }, 2)
      .from('.home__img-2', { opacity: 0, x: -80, rotation: -15, duration: 0.8, ease: 'back.out(1.5)' }, 2.2)
      .from('.home__img-1', { opacity: 0, x: -80, rotation: -15, duration: 0.8, ease: 'back.out(1.5)' }, 2.4)
      .from('.home__img-6', { opacity: 0, x: 80, rotation: 15, duration: 0.8, ease: 'back.out(1.5)' }, 2.2)
      .from('.home__img-9', { opacity: 0, x: 80, rotation: 15, duration: 0.8, ease: 'back.out(1.5)' }, 2.4)
      .from('.home__img-7', { opacity: 0, scale: 0.5, duration: 1, ease: 'elastic.out(1, 0.3)' }, 2.8)
      .from('.home__img-4', { opacity: 0, scale: 0.5, duration: 1, ease: 'elastic.out(1, 0.3)' }, 3)
      .from('.home__img-13', { opacity: 0, y: 100, duration: 0.8 }, 3.2)
      .from('.home__img-12', { opacity: 0, y: 100, duration: 0.8 }, 3.2);

    return () => tl.kill();
  }, []);

  return (
    <motion.main
      className="main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="home">
        <div className="home__container">
          <img src="/assets/img/img-bg.svg" alt="background" className="home__bg" />
          <img src="/assets/img/cloud-1.svg" alt="cloud" className="home__cloud-1" />
          <img src="/assets/img/cloud-2.svg" alt="cloud" className="home__cloud-2" />
          <img src="/assets/img/sled.svg" alt="Santa's sled" className="home__sled" />

          <div className="home__images">
            {[...Array(16)].map((_, i) => (
              <img
                key={i + 1}
                src={`/assets/img/img-${i + 1}.svg`}
                alt={`decoration ${i + 1}`}
                className={`home__img-${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Text container - always visible */}
        <motion.div 
          className="home__text-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 1, ease: 'easeOut' }}
        >
          <h1 className="home__title">
            <i className="fa-solid fa-snowflake"></i>
            {' '}I wish Every New Year We Are Together maryomty{' '}
            <i className="fa-solid fa-snowflake"></i>
          </h1>
          <h2 className="home__subtitle">
            <i className="fa-solid fa-heart"></i>
            {' '}Merry Christmas maryomty{' '}
            <i className="fa-solid fa-heart"></i>
          </h2>
        </motion.div>
      </section>
    </motion.main>
  );
};

export default Home;
