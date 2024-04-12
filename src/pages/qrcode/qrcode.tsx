import qrcode from "../../assets/qrcode/qrcode.svg";

const Qrcode = () => {
  return (
    <div className="bg-blue-500 w-full h-screen flex flex-col justify-center items-center p-8">
      <img src={qrcode} alt="QRCode" className="rounded-md w-80" />
    </div>
  );
};

export default Qrcode;
