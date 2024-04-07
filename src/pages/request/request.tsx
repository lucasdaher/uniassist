import Footer from "../../components/footer";
import Header from "../../components/header";
import RequestForm from "../../components/request/requestForm";

const Request = () => {
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
