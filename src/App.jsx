import Hero from "./Components/Hero";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Team from "./Components/Team";
import Testemonials from "./Components/Testemonials";
import Reservations from "./Components/Reservations";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";

function App() {
  return (
    <div className=" bg-pattern  overflow-hidden  ">
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Team />
      <Testemonials />
      <Reservations />
      <Footer />
    </div>
  );
}

export default App;
