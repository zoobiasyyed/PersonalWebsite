import Header from "./Header";
import Footer from "./Footer";
import Projects from "./Projects";
import Experience from "./Experience";
import TechStack from "./TechStack";

const backgroundImageStyle = {
  backgroundImage: `url(/strawbBackground.png)`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  minHeight: "100vh",
};

export default function Layout() {
  return (
    <>
      <div style={backgroundImageStyle}>
        <Header />
        <TechStack/>
        <Projects />
        <Experience/>
      </div>
      <Footer />
    </>
  );
}
