import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ setOpenModal, dark }) => {

  const [open, setOpen] = React.useState(false);

  const textColor = dark?'text-black':'text-white';
  const otherColor = dark?'text-white':'text-black';

  const bgColor = dark?'bg-white':'bg-black';
  const otherBgColor = dark?'bg-black':'bg-white';

  const [hover, setHover] = React.useState(false);

  return (
    <header className="p-0 absolute w-full z-10">
      <div className="flex py-10 container mx-auto text-white items-center justify-between md:block hidden">
       <ul>
       	<li className="float-left"><Link to={'/'} className={`${textColor} font-sans font-bold uppercase`}>NYC COMEDY SITES</Link></li>
       </ul>
       
       <ul>
          
       	<li className="float-right ml-10"><a href="/#contact"  className={`${otherColor} ${otherBgColor} font-sans font-normal uppercase px-5 py-3 rounded-full`}>Contact</a></li>
            
        <li className="float-right ml-10"><Link to={'/#about'} className={`${textColor} font-sans font-normal uppercase`}>About</Link></li>
        <li className="float-right ml-10"><a onClick={(e) => {e.preventDefault()}} to={'#'} className={`${textColor} font-sans font-normal uppercase`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>{hover?'COMING SOON':'PROJECTS'}</a></li>
        
       </ul>
      </div>
      <div className="fixed mb-10 z-20 flex py-0 container mx-auto justify-between md:hidden">
        <div/>
        <div className="relative">
          <button className="text-gray-500 w-10 h-10 relative focus:outline-none bg-black" onClick={() => setOpen(!open)}>
                <span className="sr-only">Open main menu</span>
                <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                    <span aria-hidden="true" className={"block absolute h-0.5 w-5 bg-white transform transition duration-500 ease-in-out "+(open?"rotate-45 ":"-translate-y-1.5")}></span>
                    <span aria-hidden="true" className={"block absolute  h-0.5 w-5 bg-white   transform transition duration-500 ease-in-out "+(open?"opacity-0 ":"")}></span>
                    <span aria-hidden="true" className={"block absolute  h-0.5 w-5 bg-white transform  transition duration-500 ease-in-out "+(open?"-rotate-45  ":"translate-y-1.5")}></span>
                </div>
            </button>
            {<div className={"absolute w-screen z-20 bg-transparent p-10 transform transition-all duration-500 ease-out "+(open?"scale-100":"scale-0")} style={{right: 0}}>
              <ul>
       <li className="text-white font-sans font-normal uppercase">PROJECTS COMING SOON</li>
        <li ><Link to={'/#about'} className={`text-white font-sans font-normal uppercase`} onClick={() => setOpen(!open)}>About me</Link></li>
        <li ><Link to={'/#contact'}  className={`text-white font-sans font-normal uppercase`} onClick={() => setOpen(!open)}>Contact</Link></li>
        
       </ul>
            </div>}
        </div>
      </div>
      {open&&<div className="z-10 fixed bg-black opacity-80 w-screen h-screen">&nbsp;</div>}
    </header>
  )
}

Header.propTypes = {
  siteName: PropTypes.string,
}

Header.defaultProps = {
  siteName: ``,
}

export default Header
