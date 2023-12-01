import LogoImg from "../assets/logo-white.svg";

export const Header = (_props: {}) => {
    return (
		<header id="header-global" className="header-global text-red" role="banner">
			<div id="header-search-icon" className="header-search-icon white">
				<i className="material-icons md-36">search</i>
			</div>
	
			<div className="search-container">
				<form role="search" method="get" className="search-form" action="<?php echo get_site_url(); ?>">
					<input id="searchbox-main" type="search" className="search-textbox" placeholder="Search..." value="" name="s"></input>
				</form>
			</div>
	
			<div className="header-logo">
				<div className="header-logo-desktop">
					<a id="triangle-logo" href="<?php echo esc_url(home_url('/')); ?>" rel="home">
						<img src={LogoImg}></img>
					</a>
				</div>
				<a id="menu-notif" style={{color: 'white', fontSize: '12px', right: '60px', position: 'absolute'}}>Menu</a>
			</div>
	
			<div className="header-logo-mobile">
				<div className="img-container">
					<a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><img id="logo-mobile" src="<?php echo get_template_directory_uri() . '//images/tri-icon.png'; ?>"></img></a>
				</div>
			</div>

			<div id="nav-icon" className="header-hamburger-icon white"><span></span><span></span><span></span></div>

		</header>
		/**<div id="nav-main" className="header-nav-container">
				<?php
					if(has_nav_menu('main'))
						wp_nav_menu(array('theme_location' => 'main', 'menu_class' => 'main'));
					else
						// Display error message if menu "main" has not been defined within WordPress
						echo 'Menu "main" is not defined!</br>';
						
					
					if(has_nav_menu('sub'))
						wp_nav_menu(array('theme_location' => 'sub', 'menu_class' => 'sub'));
					else
						// Display error message if menu "sub" has not been defined within WordPress
						echo 'Menu "sub" is not defined!</br>';
				?>
			</div>*/
	);
}