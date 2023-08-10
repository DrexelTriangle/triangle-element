import { FC } from "react";
import MastheadImg from "../assets/logo-black.svg";

export const Footer = (props: {menu: Array<FC>}) => {
    return (<footer id="colophon" className="footer-wrapper">
	<div className="footer-container">
		<div className="footer-branding">
			<div className="footer-logo">
				<a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
					<img src={MastheadImg}></img>
				</a>
			</div>
			
			<div className="footer-social">
				<a href="https://www.facebook.com/drexel.triangle/" target="_blank">
					<span className="fa-stack fa-1x">
						<i className="fa fa-circle fa-stack-2x" style={{"color": "#3b5998"}}></i>
						<i className="fa fa-facebook fa-stack-1x"></i>
					</span>
				</a>
				<a href="https://twitter.com/drexeltriangle" target="_blank">
					<span className="fa-stack fa-1x">
						<i className="fa fa-circle fa-stack-2x" style={{"color": "#00acee"}}></i>
						<i className="fa fa-twitter fa-stack-1x"></i>
					</span>
				</a>
				<a href="https://www.instagram.com/drexeltriangle/" target="_blank">
					<span className="fa-stack fa-1x">
						<i className="fa fa-circle fa-stack-2x text-instagram"></i>
						<i className="fa fa-instagram fa-stack-1x"></i>
					</span>
				</a>
				<a href="https://www.youtube.com/user/DrexelTriangle" target="_blank">
					<span className="fa-stack fa-1x">
						<i className="fa fa-circle fa-stack-2x" style={{"color": "#e52d27"}}></i>
						<i className="fa fa-youtube-play fa-stack-1x"></i>
					</span>
				</a>
				<a href="http://thetriangle.us2.list-manage.com/subscribe/post?u=6eb4aab81745d3436b16a6181&id=7389750c95" target="_blank">
					<span className="fa-stack fa-1x">
						<i className="fa fa-circle fa-stack-2x" style={{"color": "#07294D"}}></i>
						<i className="fa fa-envelope-o fa-stack-1x"></i>
					</span>
				</a>
			</div>
			
			<div className="footer-tagline">
				THE INDEPENDENT STUDENT NEWSPAPER AT DREXEL UNIVERSITY SINCE 1926
			</div>
		</div>
		
		{/* <?php
			if(has_nav_menu('footer'))
				wp_nav_menu(array('container' => 'nav',
								  'container_className' => 'footer-nav-container',
								  'menu_className' => 'footer-nav-links',
								  'theme_location' => 'footer'));
			else
				// Display error message if menu "footer" has not been defined within WordPress
				echo 'Menu "footer" is not defined!</br>';
		?> */}
		<nav className="footer-nav-container"><ul id="menu-footer-menu" className="footer-nav-links"><li id="menu-item-43823" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-43823"><a href="https://www.thetriangle.org" aria-current="page">Home</a></li>
<li id="menu-item-43824" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-43824"><a href="https://www.thetriangle.org/news/">News</a></li>
<li id="menu-item-43826" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-43826"><a href="https://www.thetriangle.org/opinion/">Opinion</a></li>
<li id="menu-item-43827" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-43827"><a href="https://www.thetriangle.org/entertainment/">A&amp;E</a></li>
<li id="menu-item-43825" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-43825"><a href="https://www.thetriangle.org/sports/">Sports</a></li>
<li id="menu-item-46975" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-46975"><a href="https://www.thetriangle.org/donate/">Donate</a></li>
<li id="menu-item-47" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-47"><a href="https://www.thetriangle.org/about/">About</a></li>
<li id="menu-item-43828" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-43828"><a href="https://www.thetriangle.org/staff/">Staff</a></li>
<li id="menu-item-43829" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-43829"><a href="https://www.thetriangle.org/classifieds/">Classifieds</a></li>
<li id="menu-item-43830" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-43830"><a href="https://www.thetriangle.org/join-the-triangle/">Join</a></li>
<li id="menu-item-44" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-44"><a href="https://www.thetriangle.org/contact/">Contact</a></li>
</ul></nav>
	</div>
	
	<div className="footer-copyright">
		©{new Date().getFullYear()} The Triangle. All rights are reserved, except where otherwise noted
	</div>
	
	<div className="footer-disclaimer">
		The Triangle is an independent student organization and is not owned nor operated by Drexel University.
	</div>
</footer>);
}