import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ setOpenModal, dark }) => {

  const [open, setOpen] = React.useState(false);

  const textColor = dark?'text-black':'text-white';

  return (
    <header className="p-0 absolute w-full">
      <div className="flex py-10 container mx-auto text-white items-center justify-between md:block hidden">
       <ul>
       	<li className="float-left"><Link to={'/'} className={`${textColor} font-sans font-bold uppercase`}>DAVE LUKE</Link></li>
       </ul>
       
       <ul>
          
       	<li className="float-right ml-10"><Link to={'/contact'}  className={`${textColor} font-sans font-normal uppercase border px-3 py-3`}>Contact</Link></li>
        <li className="float-right ml-10"><Link to={'/tech'}  className={`${textColor} font-sans font-normal uppercase`}>Tech</Link></li>

        <li className="float-right ml-10"><Link to={'/photography'}  className={`${textColor} font-sans font-normal uppercase`}>Photography</Link></li>
        <li className="float-right ml-10"><Link to={'/#about'} className={`${textColor} font-sans font-normal uppercase`}>About</Link></li>
        <li className="float-right ml-10"><Link to={'/projects'} className={`${textColor} font-sans font-normal uppercase`}>Projects</Link></li>
       
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
            {<div className={"absolute w-screen z-20 bg-white p-10 transform transition-all duration-500 ease-out "+(open?"scale-100":"scale-0")} style={{right: 0}}>
              <ul>
        <li ><Link to={'/'} className={`text-black font-sans font-normal uppercase`}>Home</Link></li>
        <li ><Link to={'/#about'} className={`text-black font-sans font-normal uppercase`}>About</Link></li>
        <li ><Link to={'/projects'} className={`text-black font-sans font-normal uppercase`}>Projects</Link></li>
      

        
        <li ><Link to={'/tech'}  className={`text-black font-sans font-normal uppercase`}>Tech</Link></li>

        <li ><Link to={'/photography'}  className={`text-black font-sans font-normal uppercase`}>Photography</Link></li>
        <li ><Link to={'/contact'}  className={`text-black font-sans font-normal uppercase`}>Contact</Link></li>
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
