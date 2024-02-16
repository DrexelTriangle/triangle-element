import { SECTIONS, LINKS } from '../util/constants.ts';

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
    <div 
      className={"bg-white overflow-y-auto fixed right-0 top-14 w-0 z-[1]" + (props.open ? " w-64 shadow-lg" : "")}
      style={{
        height: "calc(100vh - 55px)",
        transition: "0.25s ease-in-out",
        MozTransition: "0.25s ease-in-out",
        msTransition: "0.25s ease-in-out",
        OTransition: "0.25s ease-in-out",
        WebkitTransition: "0.25s ease-in-out"
      }}
    >
      <ul id="menu-main-menu" className="border-b-[1px] border-neutral-primary-300 overflow-x-hidden font-heading">
        {SECTIONS.map( (section) => <li key={section.name}>
          <a href={section.href}
            className="block h-6 p-4 text-black leading-normal text-left align-top hover:bg-neutral-primary-200 hover:border-0"
          >
            {section.name}
          </a>
        </li> )}
      </ul>

      <ul id="menu-sub-menu" className="overflow-x-hidden font-heading">
        {LINKS.map( (link) => <li key={link.name}>
          <a href={link.href}
            className="block h-6 p-4 text-neutral-primary-400 leading-normal text-left align-top hover:bg-neutral-primary-200 hover:border-0"
          >
            {link.name}
          </a>
        </li> )}
      </ul>
		</div>
	</div>
}
