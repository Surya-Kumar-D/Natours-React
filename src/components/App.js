import About from './About';
import Booking from './Booking';
import Features from './Features';
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';
import Popup from './Popup';
import Stories from './Stories';
import Tours from './Tours';

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <main>
        <About />
        <Features />
        <Tours />
        <Stories />
        <Booking />
      </main>
      <Footer />
      <Popup />
    </>
  );
}

export default App;
