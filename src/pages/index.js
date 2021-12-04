import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "~/components/layout"
import SEO from "~/components/seo"
import CategoryList from "~/components/category-list"
import PageHeading from "~/components/styled/page-heading"

const IndexPage = ({ data: { allStrapiCategory } }) => {
  const categories = allStrapiCategory.edges
  const seo = { title: "Categories" }
  return (
    <Layout className="bg-red-500">
      <SEO seo={seo} />
      <div className="bg-cover bg-fixed bg-center" style={{backgroundImage: 'url(https://res.cloudinary.com/meshed-nyc/c_fill/w_1600,q_auto/birb.jpg)'}}>
      <div className="container mx-auto flex h-screen items-center p-6 md:p-10">
        <div className="md:w-2/3">

          <h1 className="font-serif mb-3 text-white inline bg-black">Hello! I'm Dave Luke,</h1>
          <div className="mb-3"/>
          <h1 className="font-serif text-white inline bg-black">a web developer</h1>
          <div className="mb-3"/>
          <h1 className="font-serif text-white inline bg-black">based in Queens, NY.</h1>
          <div className="mb-3"/>
          <p className="text-sm text-gray-100 inline">I also took this photo of this hawk at the Unisphere.</p>
        </div>

      </div>
      </div>


      <div className="container mx-auto grid md:grid-cols-3 md:px-10 md:mb-20 py-32">
      <div className="block md:hidden flex relative items-center justify-center px-10 mb-10">
          
            <img src="https://res.cloudinary.com/meshed-nyc/image/upload/v1638307749/bagel-square_yqsxz4.jpg" className="w-full" />
        
        </div>
      <div className="md:col-span-2 px-10 flex items-center md:mb-0 mb-10">
          <div className="">
          <h1 className="font-serif mb-5 inline bg-black text-white">Build a website like Bagel</h1>
          <p className="font-sans my-5">
            Bagel is my 13 year old puggle. At her sweet old age, she's laid back and carefree. But she's speedy and responsive when she needs to be, especially when food is present!
          </p>
          <h3 className="font-serif inline bg-black text-white py-1">You may need a reliable website that is also speedy and responsive!</h3>
          <div/>
          <p className="font-sans my-5">
            <a href="https://www.gatsbyjs.com/why-gatsby/" target="_blank">Gatsby</a> is a modern web technology that creates fast static websites.
          </p>
          <p className="font-sans mb-5">
            Each clicked link loads the next page instantly!
          </p>
          <p className="font-sans mb-5">
            This technology yields great performance, and can benefit many types of websites.
          </p>
          <p className="font-sans font-bold">
            Reach out to me, to inquire if Gatsby is right for your website!
          </p>
          </div>
        </div>
        <div className="hidden md:block flex relative items-center justify-center">
          <div className="bg-red-500 block w-64 h-64 overflow-hidden">&nbsp;</div>
          <div className="bg-red-500 block w-64 h-64 overflow-hidden absolute -mt-60 -ml-4 flex justify-center items-end">
            <img src="https://res.cloudinary.com/meshed-nyc/image/upload/v1638307749/bagel-square_yqsxz4.jpg" />
          </div>
        </div>
        

      </div>
      <div className="container bg-black mx-auto text-white text-center py-20 mb-32 px-10">
        <h1 className="text-white font-serif mb-20">What kind of websites are a good fit?</h1>
        <div className="grid md:grid-cols-4 gap-5 mb-20">
          <div className="text-center">
            <h3 className="font-serif text-white mb-5">Businesses</h3>
            <p className="text-gray-500 text-left font-sans">Static sites are great for businesses of all sizes that need a website for informational purposes.</p>
          </div>
          <div className="text-center">
            <h3 className="font-serif text-white mb-5">Personal Sites</h3>
            <p className="text-gray-500 font-sans text-left">
              Boost your brand with a beautifully designed website using sophisticated yet simple technology.
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-serif text-white mb-5">Portfolios</h3>
            <p className="text-gray-500 text-left">
              Impress potential clients with a seamless experience that loads your showcase of works immediately
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-serif text-white mb-5">Blogs</h3>
            <p className="text-gray-500 text-left">
              Static websites can connect to Wordpress and other blogging platforms easily!
            </p>
          </div>
        </div>
        <div className="text-center ">
          <Link href="/contact" className="border py-5 px-10 text-white font-sans">Contact me</Link>
        </div>
      </div>

      <div className="container mx-auto p-10 mb-10 grid md:grid-cols-3" id="about">
      <div className="hidden md:block relative mb-32">
        <div className="bg-red-500 block  w-64 h-64 overflow-hidden  flex justify-center items-end">&nbsp;</div>
          <div className="bg-red-500 block  w-64 h-64 absolute -mt-60  ml-4 overflow-hidden flex justify-center items-end">
            <img src="https://res.cloudinary.com/meshed-nyc/image/upload/v1638307749/dave_t4vbsk.jpg"/>
          </div>
      </div>
      <div className="text-black md:col-span-2 mb-5">
          <h1 className="mb-5 font-serif bg-black text-white inline">About me</h1>
          <p className="my-5">I grew up in Forest Hills, Queens, NY.</p>
          <p className="mb-5">After graduating from university in 2006, I got my start as a junior web developer at Sotheby's.</p>
          <p className="mb-5">Upon leaving the company in 2009, I made my bread-and-butter building websites, mobile apps, Shopify plugins, and everything inbetween. I've developed an entire dropshipping system that allows third party merchants to sell a client's products seamlessly as if it were their own.</p>
          <p className="mb-5">My general approach to building sites for small businesses or individuals is that "simple is bettter." We are fortunate to live in a time when the speed of technology is well beyond our expectations. However, it is important to understand the basic needs of the person or business to not overcomplicate the solution!</p>
          
        </div>
        <div className="block md:hidden pt-10 relative mb-32 flex justify-center items-center">
       
          
            <img src="https://res.cloudinary.com/meshed-nyc/image/upload/v1638307749/dave_t4vbsk.jpg" className="w-full"/>
         
      </div>
      </div>


      <div className="bg-white  pb-20">
      <div className="container mx-auto p-6 md:p-10 ">
        <div className="text-center">
          <h1 className="font-serif mb-5 bg-red-500 text-white inline">Ready to build a sweet site?</h1>
          <h3 className="font-serif mt-5 mb-10">Reach out to me to see what I can do for you!</h3>
          <Link href="/contact" className="bg-black py-5 px-10 text-white font-sans">Contact me</Link>
        </div>
      </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query CategoriesQuery {
    allStrapiCategory {
      edges {
        node {
          name
          id
          slug
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  aspectRatio: 1.3
                )
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
