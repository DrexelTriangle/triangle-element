import { useState } from 'react';
import './App.css'
import { Footer } from './components/Footer.tsx';
import { Header, SearchIcon } from './components/Header.tsx';
import { HeaderFrontPage } from './components/HeaderFrontPage.tsx';
import { Features } from './components/Features.tsx'
import ScrollIn from "./util/ScrollIn.tsx";
import { HamburgerIcon, HeaderMenu } from './components/HeaderMenu.tsx';
import { SectionPreview } from './components/SectionPreview.tsx';
import { SocialWidget } from './components/SocialWidget.tsx';
import { PollsWidget } from './components/PollsWidget.tsx';
import { SECTIONS } from './util/constants.ts';
import "../TriangleX/style.css"

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return <div className="font-content">
    <ScrollIn scrollInHeight={250}>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
    </ScrollIn>
    <SearchIcon open={searchOpen} setOpen={setSearchOpen} color="black" className="fixed left-0" />
    <HamburgerIcon open={menuOpen} setOpen={setMenuOpen} color="black" className="fixed right-0" />
		<HeaderMenu open={menuOpen} setOpen={setMenuOpen} />
    <div className="max-w-[1280px] w-[90%] m-auto">
      <HeaderFrontPage />
      <Features />
      <div id="sections" className="flex md:flex-row flex-col mb-12">
        <main className="flex-1 pr-5 overflow-hidden">
          {SECTIONS.filter((section) => section.preview).map((section, i) => <SectionPreview {...section} key={i}/>)}
        </main>
        <aside className="basis-[300px] pl-5 border-l-[1px] border-neutral-primary-300">
          <SocialWidget />
          <PollsWidget />
        </aside>
      </div>
    </div>
    <Footer menu={[]}/>
  </div>
}

export default App
