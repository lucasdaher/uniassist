import { useEffect } from "react";
import Announce from "./components/app/announcements/announce";
import Header from "./components/app/header";

import { useNavigate } from "react-router-dom";
import LastTasks from "./components/app/task/lastTasks";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("access") !== "access") {
      navigate("/request-access");
    }
  }, []);
  return (
    <>
      <div className="">
        <Header />

        <main className="max-w-[1440px] mx-auto px-4">
          <Announce />
          <LastTasks />
        </main>
      </div>
    </>
  );
}

export default App;
