import './App.css'
import { Footer } from './components/Footer.tsx';
import { Header } from './components/Header.tsx';
import { HeaderFrontPage } from './components/HeaderFrontPage.tsx';
import { Features } from './components/Features.tsx'
import "../TriangleX/style.css"

function App() {
  return <>
    <Header />
    <div className="max-w-[1280px] w-[90%] m-auto">
      <HeaderFrontPage />
      <Features />
    </div>
    <Footer menu={[]}/>
  </>
}

export default App
