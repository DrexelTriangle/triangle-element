import LogoImg from "../assets/logo-black.svg";

export const HeaderFrontPage = (_props: {}) => {
    return (
        <header id="header-frontpage" className="frontpage-header">
            <div className="frontpage-logo">
                <img src={LogoImg}></img>
            </div>
            <nav>
                <div className="menu-main-menu-container">
                    <ul id="menu-main-menu-1" className="frontpage">
                        <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-40351">
                            <a href="https://www.thetriangle.org/news/">News</a>
                        </li>
                        <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-40353">
                            <a href="https://www.thetriangle.org/opinion/">Opinion</a>
                        </li>
                        <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-40350">
                            <a href="https://www.thetriangle.org/entertainment/">Arts &amp; Entertainment</a>
                        </li>
                        <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-40352">
                            <a href="https://www.thetriangle.org/sports/">Sports</a>
                        </li>
                        <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-51695">
                            <a href="https://www.thetriangle.org/candp/comics/">Comics</a>
                        </li>
                        <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-50768">
                            <a href="https://www.thetriangle.org/podcasts/">Podcasts</a>
                        </li>
                    </ul>
                 </div>
            </nav>
        </header>
        // <header id="header-frontpage" className="frontpage-header">
        //     <div className="frontpage-logo">
        //         {/* TODO: Center Image */}
        //         <img src="https://www.thetriangle.org/wp-content/themes/TriangleX/images/logo-black.svg"></img>
        //     </div>
        //     <nav>
        //         {/* TODO: Change Height of Container */}
        //         <div className="menu-main-menu-container">
        //             <ul id="menu-main-menu-1" className="frontpage">
        //                 <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-40351">
        //                     <a href="https://www.thetriangle.org/news/">News</a>
        //                 </li>
        //                 <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-40353">
        //                     <a href="https://www.thetriangle.org/opinion/">Opinion</a>
        //                 </li>
        //                 <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-40350">
        //                     <a href="https://www.thetriangle.org/entertainment/">Arts &amp; Entertainment</a>
        //                 </li>
        //                 <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-40352">
        //                     <a href="https://www.thetriangle.org/sports/">Sports</a>
        //                 </li>
        //                 <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-51695">
        //                     <a href="https://www.thetriangle.org/candp/comics/">Comics</a>
        //                 </li>
        //                 <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-50768">
        //                     <a href="https://www.thetriangle.org/podcasts/">Podcasts</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </nav>
        // </header>
    );
}