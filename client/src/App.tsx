import "./styles/_reset.scss";
import "./styles/_container.scss";
import "./styles/_theme.scss";
import { Header } from "./Components/Header/Header";
import { Layout } from "antd";
import { Hero } from "./Components/Hero/Hero";
import { About } from "./Components/About/About";
import { Project } from "./Components/Project/Project";
import { Footer } from "./Components/Footer/Footer";
import { useEffect, useState } from "react";
import { Loading } from "./Components/Loading/Loading";

function App() { 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />
  }
  
  return (
    <Layout style={{ backgroundColor: "unset" }}>
      <Header />
      <main>
        <Hero />
        <About />
        <Project />
      </main>
        <Footer />
    </Layout>
  );
}

export default App;
