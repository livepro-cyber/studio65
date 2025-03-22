import { Header } from '../Components/Header';
import { FeaturedProjects } from '../Components/FeatureProjects';
import { Services } from '../Components/Services'
import { Contact } from '../Components/Contact';
import { Footer } from '../Components/Footer';
// import HeroSlider from '../Components/HeroComponents/HeroSlider';
import { Hero } from '../Components/Hero';
import { About } from '../Components/About';

const Home = () => {
  return (
    <div>
      <Header />
      {/* <HeroSlider /> */}
      <Hero />
      <About />
      <FeaturedProjects />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
