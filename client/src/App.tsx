import { Header } from './Components/Header/Header'
import './Reset.scss'
import "./styles/container.scss"
import "./index.scss"
import { Layout } from 'antd';
import { Hero } from './Components/Hero/Hero';

function App() {
  return (
    <Layout style={{backgroundColor: 'unset'}}>
      <Header />
      <main>
        <Hero />
      </main>
    </Layout>
  )
}

export default App
