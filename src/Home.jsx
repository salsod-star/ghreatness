import { useEffect, useState } from "react";
import Nav from "./components/Navigation/Nav";
import {
  About,
  Contact,
  Education,
  Entertainment,
  Footer,
  Gaming,
  Header,
  Hero,
  News,
} from "./sections/HomePageSections";
import Schools from "./components/slider/Schools";
import Statistics from "./components/stat/Statistics";

function Home() {
  const [refType, setRefType] = useState("");

  useEffect(() => {
    if (refType === "") {
      return;
    }

    document.getElementById(refType).scrollIntoView({ behavior: "smooth" });
  }, [refType]);

  return (
    <>
      <Header>
        <Nav handleSetReftType={setRefType} />
        <Hero />
      </Header>
      <main>
        <Schools />
        <Entertainment />
        <Education />
        <Statistics />
        <Gaming />
        <News />
        <About />
        <Contact />
      </main>
      <Footer>Footer</Footer>
    </>
  );
}

export default Home;
