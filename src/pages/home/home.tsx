import Footer from "../../components/footer";
import Header from "../../components/header";
import About from "../../components/home/about";
import Cards from "../../components/home/cards";
import Presentation from "../../components/home/presentation";

const Home = () => {
  return (
    <>
      <Header />

      <main className="bg-gradient-to-t from-blue-200 to-blue-500 w-full h-max">
        <Presentation />
        <Cards />
        <About />
      </main>

      <Footer />
    </>
  );
};

export default Home;
