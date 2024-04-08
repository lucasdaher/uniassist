import DelAccount from "@/components/app/alert-dialog/delAccount";
import Header from "@/components/app/header";

const Profile = () => {
  return (
    <>
      <Header />
      <main className="max-w-[1440px] mx-auto mt-12">
        <DelAccount />
      </main>
    </>
  );
};

export default Profile;
