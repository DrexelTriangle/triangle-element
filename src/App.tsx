import './App.css'
import { Footer } from './components/Footer.tsx';
import { Header } from './components/Header.tsx';
import { HeaderFrontPage } from './components/HeaderFrontPage.tsx';
import "../TriangleX/style.css"

function App() {
  return <>
    <Header />
    <HeaderFrontPage />
    <Footer menu={[]}/>
  </>
}

export default App
