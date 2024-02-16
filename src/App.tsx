import { useState } from 'react';
import './App.css'
import { Footer } from './components/Footer.tsx';
import { Header } from './components/Header.tsx';
import { HeaderFrontPage } from './components/HeaderFrontPage.tsx';
import { Features } from './components/Features.tsx'
import ScrollIn from "./util/ScrollIn.tsx";
import { HamburgerIcon, HeaderMenu } from './components/HeaderMenu.tsx';
import "../TriangleX/style.css"

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return <div className="font-content">
    <ScrollIn scrollInHeight={250}>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </ScrollIn>
    <HamburgerIcon open={menuOpen} setOpen={setMenuOpen} color="black" className="fixed right-0" />
		<HeaderMenu open={menuOpen} setOpen={setMenuOpen} />
    <div className="max-w-[1280px] w-[90%] m-auto">
      <HeaderFrontPage />
      <Features />
    </div>
    <Footer menu={[]}/>
  </div>
}

export default App
