import React from "react"
import { graphql } from "gatsby"

import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "~/components/layout"
import SEO from "~/components/seo"

const PhotographyPage = ({ data: { allStrapiPhoto } }) => {
  const photos = allStrapiPhoto.edges
  const seo = { title: "Categories" }
  return (
    <Layout className="" dark={true}>
      <SEO seo={seo} />
      <div className="container pt-20 mb-10 mx-auto text-center">
        <h1 className="font-serif mt-20">Photography</h1>
        <div className=" p-10">
            <p className="text-black mb-5">While I am not a professional photographer, I do enjoy taking my camera around Queens.</p>
            <p className="text-black mb-5">Here is my modest portfolio, which I hope to add to soon!</p>
            <p className="text-black">Yes, there's a lot of bird photos. I am not particularly a bird enthusiast. It just somehow turned out that way!</p>
          </div>
      </div>
      <div className="container mx-auto grid md:grid-cols-2 gap-4 px-5 md:px-0 pb-20">
          
          {
            photos.map((photo) => <div key={`photo-${photo.node.id}`} className="relative">
                <GatsbyImage image={photo.node.Photo.localFile.childImageSharp.gatsbyImageData} className="w-full "/>
                <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center font-sans items-center text-l text-white">
                  <span className="bg-opacity-50 bg-black py-3 px-5">{photo.node.Title}</span>
                </div>
              </div>)
          }
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PhotoQuery {
    allStrapiPhoto {
      edges {
        node {
          Title
          Photo {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality:100, width:2000
                )
              }
            }
          }
        }
      }
    }
  }
`

export default PhotographyPage
