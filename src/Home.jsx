import "./styles.css";
import Intro from "./home/intro";
import Myself from "./home/myself";
import GuatePictures from "./home/guatePictures";
import NavBarProjects from "./NavBarProjects";

const Home = () => {
  return (
    <>
      <NavBarProjects />
      
      <Intro />

      <Myself />

      <GuatePictures />
    </>
  );
};

export default Home;
