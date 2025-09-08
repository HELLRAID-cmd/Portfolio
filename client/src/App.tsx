import "./styles/_reset.scss";
import "./styles/_container.scss";
import "./styles/_theme.scss";
import { Header } from "./Components/Header/Header";
import { Layout } from "antd";
import { Hero } from "./Components/Hero/Hero";
import { About } from "./Components/About/About";

function App() {
  return (
    <Layout style={{ backgroundColor: "unset" }}>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </Layout>
  );
}

export default App;
