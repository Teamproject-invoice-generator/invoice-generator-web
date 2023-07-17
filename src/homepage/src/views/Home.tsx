import Header from "../components/Header/Header";
import Introduction from "../components/Introduction/Introduction";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <main id="main">
        <Introduction />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
