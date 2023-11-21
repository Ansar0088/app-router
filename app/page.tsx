import Image from "next/image";
import SideNav from "./Components/SideNav";
import TabsRoute from "./Components/TabsRoute";
import MainSection from "./Components/MainSection";
import Test from "./Test";
import Editbar from "./Components/Editbar";

export default function Home() {
  return (
    <>
      {/* <div className="flex">
        <SideNav />
        <TabsRoute />
        <MainSection />
      </div> */}

      <Test />
      <Editbar />
    </>
  );
}
