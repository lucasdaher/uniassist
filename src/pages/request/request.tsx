import { useEffect } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import RequestForm from "../../components/request/requestForm";

const Request = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />

      <main>
        <RequestForm title="Solicitar Acesso" />
      </main>

      <Footer />
    </div>
  );
};

export default Request;
