import LogoImg from "../assets/logo-white.svg";
import TriT from "../assets/tri-T.png";

export const Header = () => {
  return <header id="header-global" className="bg-primary flex w-full h-14" role="banner">
		<div
			id="header-search-icon"
			className="cursor-pointer h-14 w-[60px] z-[1] text-center text-white"
			style={{
				transition: "0.4s ease-in-out",
				MozTransition: "0.4s ease-in-out",
				msTransition: "0.4s ease-in-out",
				OTransition: "0.4s ease-in-out",
				WebkitTransition: "0.4s ease-in-out"
			}}
		>
			<i className="material-icons md-36">search</i>
		</div>

		<div className="search-container">
			{/* todo: figure out how to search in react */}
			<form role="search" method="get" className="search-form" action="<?php echo get_site_url(); ?>">
				<input id="searchbox-main" type="search" className="search-textbox" placeholder="Search..." value="" name="s"></input>
			</form>
		</div>

		<div className="flex-1 h-14 md:flex hidden flex-col h-14 justify-center items-center">
			<a id="triangle-logo" className="w-fit" href="/" rel="home">
				<img src={LogoImg} className="h-10" />
			</a>
			{/*<a id="menu-notif" style={{color: 'white', fontSize: '12px', right: '60px', position: 'absolute'}}>Menu</a>*/}
		</div>

		<div className="flex-1 h-14 md:hidden flex items-center justify-center h-full">
			<a href="/" rel="home"><img id="logo-mobile" className="h-11" src={TriT}></img></a>
		</div>

		<div id="nav-icon" className="header-hamburger-icon cursor-pointer h-14 w-[60px] z-[1] text-center text-white">
			<span
				className="bg-white rounded block h-1 l-0 m-3.5 absolute rotate-0 w-8 top-0"
				style={{
					transition: "0.25s ease-in-out",
					MozTransition: "0.25s ease-in-out",
					msTransition: "0.25s ease-in-out",
					OTransition: "0.25s ease-in-out",
					WebkitTransition: "0.25s ease-in-out"
				}}
			/>
			<span
				className="bg-white rounded block h-1 l-0 m-3.5 absolute rotate-0 w-8"
				style={{
					transition: "0.25s ease-in-out",
					MozTransition: "0.25s ease-in-out",
					msTransition: "0.25s ease-in-out",
					OTransition: "0.25s ease-in-out",
					WebkitTransition: "0.25s ease-in-out"
				}}
			/>
			<span
				className="bg-white rounded block h-1 l-0 m-3.5 absolute rotate-0 w-8"
				style={{
					transition: "0.25s ease-in-out",
					MozTransition: "0.25s ease-in-out",
					msTransition: "0.25s ease-in-out",
					OTransition: "0.25s ease-in-out",
					WebkitTransition: "0.25s ease-in-out"
				}}
			/>
			<div id="nav-main" className="header-nav-container open">
				<div className="menu-main-menu-container">
					<ul id="menu-main-menu" className="main">
						<li id="menu-item-40351" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-40351"><a href="https://www.thetriangle.org/news/">News</a></li>
						<li id="menu-item-40353" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-40353"><a href="https://www.thetriangle.org/opinion/">Opinion</a></li>
						<li id="menu-item-40350" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-40350"><a href="https://www.thetriangle.org/entertainment/">Arts &amp; Entertainment</a></li>
						<li id="menu-item-40352" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-40352"><a href="https://www.thetriangle.org/sports/">Sports</a></li>
						<li id="menu-item-51695" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-51695"><a href="https://www.thetriangle.org/candp/comics/">Comics</a></li>
						<li id="menu-item-50768" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-50768"><a href="https://www.thetriangle.org/podcasts/">Podcasts</a></li>
					</ul>
				</div>
				<div className="menu-sub-menu-container">
					<ul id="menu-sub-menu" className="sub">
						<li id="menu-item-46974" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-46974"><a href="https://www.thetriangle.org/donate/">Donate</a></li>
						<li id="menu-item-40358" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-40358"><a href="https://www.thetriangle.org/about/">About</a></li>
						<li id="menu-item-46705" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-46705"><a href="https://www.thetriangle.org/join-the-triangle/">Join The Triangle</a></li>
						<li id="menu-item-40356" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-40356"><a href="https://www.thetriangle.org/classifieds/">Classifieds</a></li>
						<li id="menu-item-40355" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-40355"><a href="https://www.thetriangle.org/staff/">Staff</a></li>
						<li id="menu-item-40357" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-40357"><a href="https://www.thetriangle.org/contact/">Contact</a></li>
					</ul>
				</div>
			</div>
		</div>
	</header>;
}
