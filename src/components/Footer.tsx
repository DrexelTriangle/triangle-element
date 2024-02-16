import { FC, CSSProperties } from "react";
import MastheadImg from "../assets/logo-black.svg";
import { SECTIONS, LINKS } from '../util/constants.ts';

const SocialIcon: FC = (props: {
	href: string,
	bgColor: string,
	bgStyle: CSSProperties,
	icon: string
}) => {
	return <a href={props.href} target="_blank">
		<span className="fa-stack fa-1x">
			<i className="fa fa-circle fa-stack-2x" style={{...props.bgStyle, color: props.bgColor}}></i>
			<i className={"fa fa-stack-1x "+props.icon}></i>
		</span>
	</a>
};

const FooterLink: FC = (props: {
	href: string,
	current: boolean,
	last: boolean,
	children: Array<FC>
}) => {
	const curProps = props.current ? {"aria-current": "page"} : {}
	const borderClass = props.last ? "" : "border-r-2 border-black"
	return <li className={borderClass+" px-1.5"}>
		<a href={props.href} {...curProps} className="font-heading text-xs text-black font-bold">{props.children}</a>
	</li>
};

export const Footer = () => {
  return <footer className="border-t-8 border-primary">
		<div className="w-[90%] max-w-[1280px] m-auto">
			<div className="flex h-[50px]">
				<div className="flex flex-col justify-center">
					<a href="/" rel="home"> {/*TODO: use masthead version without bottom text*/}
						<img className="h-[26px]" src={MastheadImg}></img>
					</a>
				</div>
				
				<div className="flex-1 text-xl pl-9 pt-[5px] text-white">
					<SocialIcon
						href="https://www.facebook.com/drexel.triangle/"
						bgColor="#3b5998" icon="fa-facebook" />
					<SocialIcon
						href="https://twitter.com/drexeltriangle"
						bgColor="#00acee" icon="fa-twitter" />
					<SocialIcon
						href="https://www.instagram.com/drexeltriangle/"
						bgColor="transparent" icon="fa-instagram"
						bgStyle={{backgroundClip: "text", WebkitBackgroundClip: "text", backgroundImage: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)"}} />
					<SocialIcon
						href="https://www.youtube.com/user/DrexelTriangle"
						bgColor="#e52d27" icon="fa-youtube-play" />
					<SocialIcon
						href="http://thetriangle.us2.list-manage.com/subscribe/post?u=6eb4aab81745d3436b16a6181&id=7389750c95"
						bgColor="#055C9D" icon="fa-envelope-o" />
				</div>
				
				<div className="font-heading text-sm leading-[50px]">
					THE INDEPENDENT STUDENT NEWSPAPER AT DREXEL UNIVERSITY SINCE 1926
					{/*Founded 1926 | Drexel University's Independent Student Newspaper*/}
				</div>
			</div>
			
			<nav className="my-[35px] text-center">
				<ul className="flex justify-center">
					<FooterLink href="/" current={true}>Home</FooterLink>
					{SECTIONS.map((section) => <FooterLink href={section.href} key={section.name}>{section.name}</FooterLink>)}
					{LINKS.map((link, i) => <FooterLink href={link.href} last={i == LINKS.length-1} key={link.name}>{link.name}</FooterLink>)}
				</ul>
			</nav>
		</div>
		
		<div className="py-2.5 h-4 text-gray-500 text-sm text-center">
			©{new Date().getFullYear()} The Triangle. All rights are reserved, except where otherwise noted.
		</div>
		
		<div className="py-2.5 h-4 text-gray-500 italic text-sm text-center border-t border-gray-300">
			The Triangle is an independent student organization and is not owned nor operated by Drexel University.
		</div>
	</footer>;
}
