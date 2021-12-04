import React from "react"
import { graphql , Link} from "gatsby"

import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "~/components/layout"
import SEO from "~/components/seo"

const ProjectPage = ({ data: { allStrapiProject } }) => {
  const projects = allStrapiProject.edges
  const seo = { title: "Projects" }
  return (
    <Layout className="" dark={true}>
      <SEO seo={seo} />
      <div className="container pt-20 mb-10 mx-auto text-center">
        <h1 className="font-serif mt-20">Projects</h1>
        <div className=" p-10">
            <p className="text-black mb-5">Here are some websites I've built for clients.</p>
          </div>
      </div>
      <div className="container mx-auto grid px-5 md:px-0 md:grid-cols-2 gap-4 pb-20">
          
          {
            projects.map((project) => <div key={`photo-${project.node.id}`} className="relative">
                <Link to={`/projects/${project.node.Slug}`}><GatsbyImage image={project.node.Images[0].localFile.childImageSharp.gatsbyImageData} className="w-full "/></Link>
                <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center font-sans items-center text-l text-white">
                 
                  <Link to={`/projects/${project.node.Slug}`}><span className="bg-black py-5 px-10 text-white font-sans">{project.node.Title}</span></Link>
                  
                </div>
              </div>)
          }
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectQuery2 {
    allStrapiProject {
      edges {
        node {
          Title
          Description
          URL
          Slug
          Images {
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100, width:1600)
              }
            }
          }
        }
      }
    }
  }
`

export default ProjectPage
