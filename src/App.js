import './App.css';
import './assets/js/script';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Newsletter from './component/NewsLetter/NewsLetter';
import Services from './component/Services/Services';
import Testimonials from './component/Testimonials/Testimonials';
import Work from './component/Work/Work';
import WorkProcess from './component/WorkProcess/WorkProcess';

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Work />
      <WorkProcess />
      <Newsletter />
      <About />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
