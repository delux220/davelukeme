import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ setOpenModal, dark }) => {

  const textColor = dark?'text-black':'text-white';

  return (
    <header className="p-0 absolute w-full">
      <div className="flex py-10 container mx-auto text-white items-center justify-between">
       <ul>
       	<li className="float-left"><Link to={'/'} className={`${textColor} font-sans font-normal uppercase`}>Home</Link></li>
       	<li className="float-left ml-10"><Link to={'/'} className={`${textColor} font-sans font-normal uppercase`}>About</Link></li>
       	<li className="float-left ml-10"><Link to={'/projects'} className={`${textColor} font-sans font-normal uppercase`}>Projects</Link></li>
       </ul>
       <ul>

       	<li className="float-right ml-10"><Link to={'/contact'}  className={`${textColor} font-sans font-normal uppercase`}>Contact</Link></li>
       <li className="float-right ml-10"><Link to={'/'}  className={`${textColor} font-sans font-normal uppercase`}>Blog</Link></li>
        <li className="float-right ml-10"><Link to={'/'}  className={`${textColor} font-sans font-normal uppercase`}>Tech</Link></li>

        <li className="float-right ml-10"><Link to={'/photography'}  className={`${textColor} font-sans font-normal uppercase`}>Photography</Link></li>

       </ul>
      </div>
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
