import About from './About';
import Booking from './Booking';
import Features from './Features';
import Header from './Header';
import Stories from './Stories';
import Tours from './Tours';

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Features />
        <Tours />
        <Stories />
        <Booking />
      </main>
    </>
  );
}

export default App;
