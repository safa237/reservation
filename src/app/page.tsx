import Image from "next/image";
import Banner from "./components/Banner";
import Explore from "./components/Explore";
import Live from "./components/Live";
import Greatest from "./components/Greatest";
import Footer from "./components/Footer";
import Header from "./components/header/Header";

export default function Home() {
  return (
    <>
    <Header />
    <main className="">
      <Banner />
      <Explore />
      <Live />
      <Greatest />
    </main>
    <Footer />
    </>
  );
}
