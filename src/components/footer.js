import React from "react"
import {Link} from "gatsby";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className=" border-b pb-10 border-gray-800 container mx-auto flex justify-center">
        
      </div>
      <div className="container text-center mx-auto pt-10 font-sans font-bold">
        &copy; {new Date().getFullYear()} Funny Sites.
      </div>
    </footer>
  )
}

export default Footer
