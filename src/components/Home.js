import React from "react";
import { First } from "react-bootstrap/esm/PageItem";
import ModalButton from "./Body/Body";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import { HeroBg } from "./HeroSection/HeroElement";
import NavBar from "./NavBar";
import SideBar from "./SideBar/SideBar";
import WelcomePage from "./WelcomePage/First"

function Home() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      {/* <HeroSection /> */}
      {/* <ModalButton /> */}
      <WelcomePage />
      <Footer />
    </div>
  );
}

export default Home;
