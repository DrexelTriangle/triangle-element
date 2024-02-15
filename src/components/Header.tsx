import LogoImg from "../assets/logo-white.svg";
import TriIcon from "../assets/tri-icon.png";

export const Header = () => {
    return <header id="header-global" className="header-global" role="banner">
			<div id="header-search-icon" className="header-search-icon white">
				<i className="material-icons md-36">search</i>
			</div>
	
			<div className="search-container">
				{/* todo: figure out how to search in react */}
				<form role="search" method="get" className="search-form" action="<?php echo get_site_url(); ?>">
					<input id="searchbox-main" type="search" className="search-textbox" placeholder="Search..." value="" name="s"></input>
				</form>
			</div>
	
			<div className="header-logo">
				<div className="header-logo-desktop">
					<a id="triangle-logo" href="/" rel="home">
						<img src={LogoImg}></img>
					</a>
				</div>
				<a id="menu-notif" style={{color: 'white', fontSize: '12px', right: '60px', position: 'absolute'}}>Menu</a>
			</div>
	
			<div className="header-logo-mobile">
				<div className="img-container">
					<a href="/" rel="home"><img id="logo-mobile" src={TriIcon}></img></a>
				</div>
			</div>

			<div id="nav-icon" className="header-hamburger-icon white"><span></span><span></span><span></span></div>
	</header>;
}
