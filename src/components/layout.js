import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import SearchResults from "~/components/search-results"
import Footer from "~/components/footer"

import Header from "~/components/header"

const Layout = ({ children , dark}) => {
  const data = useStaticQuery(graphql`
    query SiteNameQuery {
      strapiGlobal {
        siteName
      }
    }
  `)

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="bg-black">
      <Header
        setOpenModal={setOpenModal}
        siteName={data.strapiGlobal.siteName || `Strapi`}
        dark={dark}
      />
      <div className="min-h-screen">
        <main>{children}</main>
        <Footer />
      </div>
      
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
