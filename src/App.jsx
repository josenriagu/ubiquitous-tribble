import GlobalStyle from './styles/GlobalStyles';
import Hero from './components/Hero';
import Location from './components/Location';
import Profiles from './components/Profiles';
import Toolkit from './components/Toolkit';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Talk from './components/Talk';
import About from './components/About';
import Archive from './components/Archive';
import Footer from './components/Footer';
import { Side } from './App.styled';

// tell the tile under the pointer where it is, for the glow that follows it
const trackPointer = (event) => {
  const tile = event.target.closest('.tile');
  if (!tile) return;
  const box = tile.getBoundingClientRect();
  tile.style.setProperty('--mx', `${event.clientX - box.left}px`);
  tile.style.setProperty('--my', `${event.clientY - box.top}px`);
};

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="wrap">
        <main id="main" className="bento" onPointerMove={trackPointer}>
          <Hero />
          <Side style={{ '--d': 4 }}>
            <Location />
            <Profiles />
          </Side>
          <Toolkit />
          <Projects />
          <Experience />
          <Talk />
          <About />
          <Archive />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
