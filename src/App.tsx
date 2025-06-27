import Banner from "./components/Banner";
import Collections from "./components/Collections";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Services from "./components/Services";

const App = () => {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <Services />
      <Collections />
      <Explore />
      <Intro />
      <Banner />
      <Footer />
    </div>
  );
};

export default App;
