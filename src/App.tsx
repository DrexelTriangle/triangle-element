import './App.css'
import { Footer } from './components/Footer.tsx';
import { Header } from './components/Header.tsx';
import { HeaderFrontPage } from './components/HeaderFrontPage.tsx';
import { Features } from './components/Features.tsx'
import ScrollIn from "./util/ScrollIn.tsx";
import "../TriangleX/style.css"

function App() {
  return <div className="font-content">
    <ScrollIn scrollInHeight={150}>
      <Header />
    </ScrollIn>
    <div className="max-w-[1280px] w-[90%] m-auto">
      <HeaderFrontPage />
      <Features />
    </div>
    <Footer menu={[]}/>
  </div>
}

export default App
