import Header from "../../components/header";
import Cards from "../../components/home/cards";
import Presentation from "../../components/home/presentation";

const Home = () => {
  return (
    <>
      <Header />

      <main className="bg-gradient-to-b from-blue-700 to-blue-400 w-full h-screen">
        <Presentation />
        <Cards />
      </main>
    </>
  );
};

export default Home;
