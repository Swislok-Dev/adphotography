import Link from "next/link"

const ScrollLink = ({children, ...props}) => {
  const handleScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');
    const elem = document.getElementById(targetId);
    elem.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <Link {...props} className="nav-link" onClick={handleScroll}>
      {children}
    </Link>
  )
}

export default ScrollLink