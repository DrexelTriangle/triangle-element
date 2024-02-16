import { ReactNode, useState, useEffect, useRef } from 'react';

const fixedStyle = {
    WebkitTransition: 'all .2s ease-in-out',
    MozTransition: 'all .2s ease-in-out',
    OTransition: 'all .2s ease-in-out',
    transition: 'all .2s ease-in-out',
};

const hiddenStyle = {
    WebkitTransform: 'translateY(-100%)',
    MsTransform: 'translateY(-100%)',
    transform: 'translateY(-100%)'
};

const scrolledInStyle = {
    WebkitTransform: 'translateY(0)',
    MsTransform: 'translateY(0)',
    transform: 'translateY(0)'
};

const getScrollY = () => {
  if (window.pageYOffset !== undefined) {
    return window.pageYOffset
  } else if (window.scrollTop !== undefined) {
    return window.scrollTop
  } else {
    return (document.documentElement || document.body.parentNode || document.body).scrollTop
  }
}

type ScrollInProps = {
  scrollInHeight: integer,
  children: ReactNode
} 

export default function ScrollIn(props: ScrollInProps) {
  const scrollInRef = useRef(null);
  const [hidden, setHidden] = useState(true);
  const [handlingScrollUpdate, setHandlingScrollUpdate] = useState(false);

  let renderStyle = fixedStyle;
  renderStyle = hidden ?
      {...renderStyle, ...hiddenStyle} :
      {...renderStyle, ...scrolledInStyle};

  useEffect(() => {
    const handleScroll = () => {
      if (!handlingScrollUpdate) {
        setHandlingScrollUpdate(true);
        update();
      }
    }

    const update = () => {
      const currentScrollY = getScrollY();

      setHidden(currentScrollY < props.scrollInHeight)

      setHandlingScrollUpdate(false);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handlingScrollUpdate, props.scrollInHeight]);

  return (
      <div className="scroll-in fixed top-0 left-0 right-0 z-[2]" ref={scrollInRef} style={renderStyle}>
        {props.children}
      </div>
  );
}
