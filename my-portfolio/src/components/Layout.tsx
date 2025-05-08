'use client'

import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import Projects from "./Projects";
import TechStack from "./TechStack";

const backgroundImageStyle = {
  backgroundImage: `url(/lightBlue.png)`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  minHeight: "100vh",
};

const buttonStyle = {
  padding: "1rem 2rem",
  margin: "0.5rem",
  fontSize: "1.2rem",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#007bff",
  color: "white",
  cursor: "pointer",
  textDecoration: "none",
};

const buttonContainerStyle = {
  display: "flex",
  flexDirection: "row" as const,
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",
  gap: "1rem",
};

export function LandingPage() {
  return (
    <div style={buttonContainerStyle}>
      <Link href="/about" style={buttonStyle}>About Me</Link>
      <Link href="/projects" style={buttonStyle}>Projects</Link>
      <Link href="/tech-stack" style={buttonStyle}>Tech Stack</Link>
      <Link href="/ux-ui" style={buttonStyle}>UX/UI</Link>
    </div>
  );
}

// Placeholder pages
function AboutMe() {
  return <div>About Me Page</div>;
}

function UxUiPage() {
  return <div>UX/UI Page</div>;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={backgroundImageStyle}>
      <LandingPage />
      <Header />
      <Footer />
    </div>
  );
}
