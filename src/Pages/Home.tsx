import { Header } from '../Components/Header';
import { FeaturedProjects } from '../Components/FeatureProjects';
import { Services } from '../Components/Services';
import { Contact } from '../Components/Contact';
import { Footer } from '../Components/Footer';
import { Hero } from '../Components/Hero';
import { About } from '../Components/About';

type HomeProps = {
  isVisible: boolean;
};

const Home: React.FC<HomeProps> = ({ isVisible }) => {
  if (!isVisible) return null; // Optional: hide if not visible

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <FeaturedProjects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
