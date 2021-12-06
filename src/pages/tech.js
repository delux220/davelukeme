import React from "react"
import ReactMarkdown from "react-markdown"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha
} from "react-google-recaptcha-v3"


import { formatPrice } from "~/helpers/currency-formatter"

const ProjectPage = ({ data }) => {
  //alert(data);
  const page = data.strapiTechPage

  const seo = {
    title: page.Title
  }

  
  return (
    <Layout dark={true}>
      <SEO seo={seo} />
      <div className="bg-white">
      <div className="container mx-auto pt-40">
        
        </div>
        <div className="container mx-auto mb-10">
        <div className="px-10 mb-20 text-center">
          <div>
            <h1 className="mb-10 font-serif">{page.Title}</h1>
            <ReactMarkdown>{page.Description}</ReactMarkdown>
          </div>
        </div>
        
        </div>
        <div className="container mx-auto mb-20 grid md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-serif text-center mb-5">Frontend</h3>
            <ReactMarkdown className="text-center">{page.Section1}</ReactMarkdown>
          </div>
          <div>
            <h3 className="font-serif text-center mb-5">Backend / Integrations</h3>
            <ReactMarkdown className="text-center">{page.Section2}</ReactMarkdown>
          </div>
          <div>
            <h3 className="font-serif text-center mb-5">Software</h3>
            <ReactMarkdown className="text-center">{page.Section3}</ReactMarkdown>
          </div>
        </div>


      </div>
      
    </Layout>
  )
}

export const query = graphql`
  query TechQuery {
    strapiTechPage {
      Title
      Description
      Section1
      Section2
      Section3
      
    }
  }
`

export default ProjectPage
