import React from "react"
import ReactMarkdown from "react-markdown"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout"
import SEO from "../components/seo"

import { formatPrice } from "~/helpers/currency-formatter"

const ProjectPage = ({ data }) => {
  //alert(data);
  const project = data.strapiProject

  const seo = {
    title: project.Title,
    shareImage: project.Image
  }
  
  return (
    <Layout dark={true}>
      <SEO seo={seo} />
      <div className="bg-white">
      <div className="container mx-auto pt-40">
        <div className="max-w-2xl mx-auto mb-10">
            <div className="w-full h-11 rounded-t-lg bg-gray-200 flex justify-start items-center space-x-1.5 px-3">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
          </div>
            <div className="border-2 border-black border-t-0 w-full">
              <GatsbyImage image={project.Images[0].localFile.childImageSharp.gatsbyImageData} className="w-full"/>

            </div>
        </div>
        </div>
        <div className="container mx-auto mb-20">
          <h1 className="font-serif text-center mb-10">{project.Title}</h1>
          <div className="text-center mb-10"><Link to={'/projects'} className="text-sm">Back to Projects</Link></div>
          <div className="mb-20 w-full max-w-screen-md mx-auto">
          <div className="font-sans leading-8">
            <ReactMarkdown>{project.Description}</ReactMarkdown>
            </div>
          </div>
          <div className="text-center">
          <a href={project.URL} className="bg-black py-5 px-10 text-white font-sans" target="_blank">Visit Site</a>
          </div>
        </div>



      </div>
      
    </Layout>
  )
}

export const query = graphql`
  query ProjectQuery($slug: String!) {
    strapiProject(Slug: { eq: $slug }) {
      Title
      Description
      URL
      Images {
        localFile {
          childImageSharp {
            gatsbyImageData(quality: 100, width:1600)
          }
        }
      }
    }
  }
`

export default ProjectPage
