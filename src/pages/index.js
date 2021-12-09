import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "~/components/layout"
import SEO from "~/components/seo"
import CategoryList from "~/components/category-list"
import PageHeading from "~/components/styled/page-heading"

const IndexPage = ({ data: { allStrapiCategory } }) => {
  const categories = allStrapiCategory.edges
  const seo = { title: "Dave Luke, NYC based developer" }
  return (
    <Layout className="bg-red-500">
      <SEO seo={seo} />
      <div className="bg-cover bg-center" style={{backgroundImage: 'url(https://res.cloudinary.com/meshed-nyc/c_fill/w_1600,q_auto/birb.jpg)'}}>
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
          <h1 className="font-serif mb-5 inline">I build websites that tell a story</h1>
          <p className="font-sans my-5">
            The websites I build are kind of like my puggle Bagel. Expressive, responsive, and fast!
          </p>
          <div/>
          <p className="font-sans my-5">
            I specialize in building sites with <a href="https://www.gatsbyjs.com/why-gatsby/" className="text-red-500" target="_blank">Gatsby</a>, a modern web technology that creates fast static websites. Each clicked link loads the next page instantly!</p>
          <p className="font-sans mb-5 hidden">
           This is because, whenever content is updated on a Gatsby site, the entire site is automatically regenerated. Typically, when you load a page on a website, there's a lot happening in the backend to display what you ultimately see on the page. Gatsby reloads all the dynamic content when updated, so when visitors hit your site, it no longer needs to do any heavy lifting. 
          </p>
          
          <p className="font-sans font-bold">
            <Link to={'/contact'} className="text-red-500">Reach out to me</Link>, to inquire if Gatsby is right for your website!
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
          <Link to="/contact" className="border py-5 px-10 text-white font-sans">Contact me</Link>
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
          <h1 className="mb-5 font-serif">About me</h1>
          <p className="my-5">I graduated from Stony Brook University in 2006, and landed my first web development job at a prestigious auction house, where I was given the opportunity to hone my skills and expand my craft as a developer.</p>
          <p className="mb-5">The experience however was also a tumultuous one for me, a young adult at the time, perhaps unprepared for the demands of a corporate environment. After being part of massive layoffs in 2009, I had felt like a failure. I blamed myself, and couldn’t shake this belief that I hadn’t done enough.</p>
          <p className="mb-5">It took time to see this event as something else: an opportunity to contemplate my own values, to focus on individual wellness, and to foster my own creativity.</p>
          <p className="mb-5">I began to develop freelance, taking on contract work from mostly solo entrepreneurs. I started developing ideas of my own, quickly becoming the “idea guy” amongst my friends. The lesson was that there was another way!</p>
          <p className="mb-5">I became passionate about helping others who set out to do their own thing. I’ve built websites for local artists, grass roots organizations, and solo entrepreneurs. I want to use my technical expertise to help people showcase what they are offering and help them reach their audience.</p>
          <p>Reach out to me, so I can help you tell <strong className="italic">your story</strong>!</p>
        </div>
        <div className="block md:hidden pt-10 relative mb-32 flex justify-center items-center">
       
          
            <img src="https://res.cloudinary.com/meshed-nyc/image/upload/v1638307749/dave_t4vbsk.jpg" className="w-full"/>
         
      </div>
      </div>


      <div className="bg-white  pb-20">
      <div className="container mx-auto p-6 md:p-10 ">
        <div className="text-center">
          <h1 className="font-serif mb-5 bg-black text-white inline">Ready to build something cool?</h1>
          <h3 className="font-serif mt-5 mb-10">Reach out to me to see what I can do for you!</h3>
          <Link to="/contact" className="bg-black py-5 px-10 text-white font-sans">Contact me</Link>
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
