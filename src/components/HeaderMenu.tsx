type HamburgerIconProps = {
  open: boolean,
  setOpen: (v:boolean) => void,
  color?: string,
  className?: string
}
export function HamburgerIcon(props: HamburgerIconProps) {
  const lineClass = `bg-${props.color || "white"} rounded block h-1 l-0 m-3.5 absolute w-8 `;
  const lineStyles = {
		transition: "0.25s ease-in-out",
		MozTransition: "0.25s ease-in-out",
		msTransition: "0.25s ease-in-out",
		OTransition: "0.25s ease-in-out",
		WebkitTransition: "0.25s ease-in-out"
	};

  return <div
    id="nav-icon"
    className={"cursor-pointer h-14 w-[60px] z-[1] text-center " + (props.className || "")}
    onClick={() => props.setOpen(!props.open)}
  >
		<span style={lineStyles}
			className={lineClass + (props.open ? " top-2.5 rotate-[135deg]" : " rotate-0 top-0")}
		/>
		<span style={lineStyles}
			className={lineClass + (props.open ? "top-2.5 opacity-0" : "rotate-0 top-2.5")}
		/>
		<span style={lineStyles}
			className={lineClass + (props.open ? "top-2.5 rotate-[-135deg]" : "rotate-0 top-5")}
		/>
	</div>
}

type HeaderMenuProps = { open: boolean, setOpen: (boolean) => void }
export function HeaderMenu(props: HeaderMenuProps) {
  return <div id="nav-main">
    <div className={"header-nav-container" + (props.open ? " open" : "")}>
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
}
