import React from "react"
import {Link} from "gatsby";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className=" border-b pb-10 container mx-auto flex justify-center">
        <div className="text-center">
        <p className="text-gray-500">Interested what I can offer you?</p>
        <Link to={'/contact'}>Contact me</Link>
        </div>
      </div>
      <div className="container text-center mx-auto pt-10 font-serif font-bold">
        &copy; 2021 David Luke.
      </div>
    </footer>
  )
}

export default Footer
