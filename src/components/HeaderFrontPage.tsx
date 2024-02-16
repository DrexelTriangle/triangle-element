import LogoImg from "../assets/logo-black.svg";
import {SECTIONS} from '../util/constants.ts';

export const HeaderFrontPage = () => {
    return <header id="header-frontpage" className="py-5">
        <div className="flex justify-center">
            <img src={LogoImg} className="w-[98%] max-w-[800px]"></img>
        </div>
        <nav>
            <ul id="menu-main-menu-1" className="border-b-[1px] border-t-2 mt-4 border-black flex items-stretch">
                {SECTIONS.map( (section, i) => <li key={i} className="flex-1 font-heading text-sm">
                    <a href={section.href}
                        className="inline-block w-full h-6 py-4 text-center hover:border-0 hover:bg-neutral-primary-200"
                    >
                        {section.name}
                    </a>
                </li>) }
            </ul>
        </nav>
    </header>;
}
