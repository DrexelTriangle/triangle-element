import LogoImg from "../assets/logo-white.svg";
import TriT from "../assets/tri-T.png";
import { HamburgerIcon } from './HeaderMenu.tsx'

type HeaderProps = { menuOpen: boolean, setMenuOpen: (boolean) => void }
export const Header = (props: HeaderProps) => {
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

    <HamburgerIcon open={props.menuOpen} setOpen={props.setMenuOpen} />
	</header>;
}
