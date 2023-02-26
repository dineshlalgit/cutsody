import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';

// import Blog from 'components/Blog';
// import Pricing from 'components/Pricing';
const Contact = lazy(() => import('components/Contact'));
const Footer = lazy(() => import('components/Footer'));
const Home = lazy(() => import('components/Home'));
const Milestones = lazy(() => import('components/Milestones'));
const Portfolio = lazy(() => import('components/Portfolio'));
const Mens = lazy(() => import('components/Mens'));
const Womens = lazy(() => import('components/Womens'));
const Phoneix_Staff = lazy(() => import('components/Phoneix_Staff'));
const Goalghar_Staff = lazy(() => import('components/Goalghar_Staff'));
const ScrollToTop = lazy(() => import('components/ScrollToTop'));
const Services = lazy(() => import('components/Services'));
const Skills = lazy(() => import('components/Skills'));
const Testimonials = lazy(() => import('components/Testimonials'));
// const Video = lazy(() => import('components/Video'));

function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <Suspense fallback={<h1 className="top-50 text-blue-500">Loading...</h1>}>
        <Home />
        <Services />
        <Portfolio />
        <Milestones />
        {/* <Blog /> */}
        {/* <Video /> */}
        {/* <PlansDemo /> */}
        <Mens />
        <Womens />
        {/* <Pricing /> */}
        <Testimonials />
        <Phoneix_Staff />
        <Goalghar_Staff />
        <Skills />
        <Contact />
        <Footer />
        <ScrollToTop />
      </Suspense>
    </motion.div>
  );
}

export default App;
