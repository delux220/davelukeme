import React from "react"
import { graphql, Link } from "gatsby"
import { ChevronDownIcon, ColorSwatchIcon, CalendarIcon, MicrophoneIcon, MailIcon, UserIcon, SearchIcon } from '@heroicons/react/solid'

import Layout from "~/components/layout"
import SEO from "~/components/seo"
import CategoryList from "~/components/category-list"
import PageHeading from "~/components/styled/page-heading"

const IndexPage = ({ data: { allStrapiCategory } }) => {
  const categories = allStrapiCategory.edges
  const seo = { title: "Dave Luke, NYC based developer" }
  return (
    <Layout className="bg-black">
    <div className="bg-black">
      <SEO seo={seo} />
      <div className="bg-cover bg-center relative" style={{backgroundImage:"url('https://res.cloudinary.com/meshed-nyc/image/upload/v1645540253/matthias-wagner-QrqeusbpFMM-unsplash_szsxzv.jpg')"}}>
      <div className="container mx-auto flex h-screen items-center p-6 md:p-10">
        <div className="text-center w-full">
          <h3 className="font-sans text-white mb-3 font-bold">ATTN: NYC COMICS!</h3>
          <h1 className="font-serif mb-4 text-white">Showcase your comedy talents</h1>
          
          <h3 className="font-serif text-white mb-5">with a beautiful, custom designed website</h3>
          
          <button className="px-8 py-3 bg-black text-white font-sans rounded-full">Get Started</button>
        </div>
        <div className="text-center absolute w-full" style={{bottom:0, left:0}}>
        <ChevronDownIcon className="mx-auto animate-bounce h-10 w-10 block text-white opacity-50"/>
        </div>
      </div>
      </div>

      <div className="bg-black">
      <div className="container mx-auto px-10 md:mb-20 py-32">
      <div className=" flex items-center md:mb-0 mb-10">
          <div className="">
          <h1 className="font-serif mb-5 inline text-white">Focus on the laughs, not the tech</h1>
          <p className="font-sans my-5 text-gray-400">Even the most popular website solutions can be cumbersome. Wordpress can still have a learning curve. Squarespace results can be underwhelming. Let me custom design and develop a website for your precise needs.</p>
          
          <p className="font-sans text-gray-400 mt-5 mb-10">I build custom-coded websites for comics at an affordable rate.</p>
          
          <a href="/#contact" className="px-8 py-3 bg-blue-600 text-white rounded-full block md:inline-block text-center">Reach out</a>
          </div>
        </div>
        <div className="hidden md:block flex relative items-center justify-center">
          
        </div>
      </div>

      </div>
      <div className="bg-black">
      <div className="container text-center px-10 mx-auto">
        <h4 className="text-center text-gray-500 font-sans block font-bold">WEBSITE FEATURES</h4>
        <h1 className="text-center text-white font-serif block my-5">The Standard Package for $250</h1>
        <p className="text-center text-gray-500 font-sans mb-5">Here are some of the features you get. Standard package does <span className="italic">not</span> include an online store.</p>
        <p className="text-center text-gray-500 font-sans mb-10">Domain purchases and hosting costs, if applicable, are also not included.</p>
      </div>
        <div className="container mx-auto grid md:grid-cols-3 px-10 gap-1">

          <div className="bg-gray-900 p-6">
            <div className="bg-blue-600 h-10 w-10 rounded-full mb-5 flex justify-center items-center mx-auto md:mx-0">
              <ColorSwatchIcon className="fa-regular fa-palette text-white w-5 h-5"/>
            </div>
            <strong className="text-white mb-2 block text-center md:text-left">CUSTOM DESIGN</strong>
            <p className="text-gray-500">I will help develop a website design that is clean, aesthetically appealing, and fits your comedic style.</p>
          </div>
          <div className="bg-gray-900 p-6">
            <div className="bg-blue-600 h-10 w-10 rounded-full mb-5 flex justify-center items-center mx-auto md:mx-0">
              <CalendarIcon className="fa-regular fa-palette text-white w-5 h-5"/>
            </div>
            <strong className="text-white mb-2 block text-center md:text-left">SHOWS &amp; EVENTS</strong>
            <p className="text-gray-500">Let your fans know when and where they can watch you perform. Easily list shows through a simplified backend.</p>
          </div>
          <div className="bg-gray-900 p-6">
            <div className="bg-blue-600 h-10 w-10 rounded-full mb-5 flex justify-center items-center mx-auto md:mx-0">
              <MicrophoneIcon className="fa-regular fa-palette text-white w-5 h-5"/>
            </div>
            <strong className="text-white mb-2 block text-center md:text-left">PODCASTS</strong>
            <p className="text-gray-500">Create a home for your podcasts. List episodes, and link to different streaming platforms.</p>
          </div>
          <div className="bg-gray-900 p-6">
            <div className="bg-blue-600 h-10 w-10 rounded-full mb-5 flex justify-center items-center mx-auto md:mx-0">
              <UserIcon className="fa-regular fa-palette text-white w-5 h-5"/>
            </div>
            <strong className="text-white block mb-2 text-center md:text-left">SOCIAL MEDIA</strong>
            <p className="text-gray-500">Promote your social media accounts, so your fans know where to follow you. Prominently share your Patreon, and gain supporters.</p>
          </div>
          <div className="bg-gray-900 p-6">
            <div className="bg-blue-600 h-10 w-10 rounded-full mb-5 flex justify-center items-center mx-auto md:mx-0">
              <SearchIcon className="fa-regular fa-palette text-white w-5 h-5"/>
            </div>
            <strong className="text-white mb-2 block text-center md:text-left">SEO</strong>
            <p className="text-gray-500">Make sure you're found when being Googled. I will do the legwork to make sure your site shows up in search engines, and present nicely on social media.</p>
          </div>
          <div className="bg-gray-900 p-6">
            <div className="bg-blue-600 h-10 w-10 rounded-full mb-5 flex justify-center items-center mx-auto md:mx-0">
              <MailIcon className="fa-regular fa-palette text-white w-5 h-5"/>
            </div>
            <strong className="text-white mb-2 block text-center md:text-left">MAILING LISTS</strong>
            <p className="text-gray-500">Mailing lists can be future free marketing. Grow your mailing list and reach more subscribers.</p>
          </div>
        </div>
      </div>
      <div className="hidden container bg-black mx-auto text-white text-center py-20 mb-32 px-10">
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

      <div className="container mx-auto p-10 mb-10 grid md:grid-cols-3 mt-20" id="about">
      <div className="hidden md:block relative mb-32 md:pr-10">
            <img src="https://res.cloudinary.com/meshed-nyc/image/upload/v1638307749/dave_t4vbsk.jpg" className="rounded-full max-w-full"/>
          
      </div>
      <div className="text-black md:col-span-2 mb-5">
          <h1 className="mb-5 font-serif text-white">Pleased to meet you. I'm Dave!</h1>
          <p className="my-5 text-gray-400">Thanks for your interest! Here is a little information about myself..</p>
          <p className="my-5 text-gray-400">I'm a Queens based website developer with over 15 years experience in various web technologies. </p>
          <p className="my-5 text-gray-400">My passion is to help self-starters pursue their goals and dreams. I have always admired those who venture off on their own to make things happen, whether they be entrepreneurs, artists, or content creators. With my knowledge and experience in tech, I hope to assist you further your comedy career.</p>
          <p className="my-5 text-gray-400">I also have a 13 year old puggle named Bagel who loves walks, hugs, and rummaging through the garbage.</p>
          <a href="#contact" className="rounded-full bg-blue-700 text-white px-8 py-3 text-center block md:inline-block">Contact me</a>
        </div>
        
      </div>


      <div className="bg-black pb-20" id="contact">
      <div className="container mx-auto px-10">
        <div className="text-center mb-10">
          <h1 className="font-serif mb-5 text-white">Ready to build something cool?</h1>
          <p className="text-center text-gray-400 font-sans">Reach out to me by completing this form. It will help me understand your tech needs.</p>
          
        </div>
        <div className="text-left md:w-1/2 mx-auto">
          <label className="block text-gray-300 font-bold uppercase text-sm">Email Address</label>
          <input type="email" name="email" className="p-3 bg-transparent border-b-2 border-gray-700 mb-5 w-full block" placeholder="you@email.com"/>
          
          <label className="block text-gray-300 font-bold uppercase text-sm">Full Name</label>
          <input type="text" name="name" className="p-3 mb-5 bg-transparent border-b-2 border-gray-700 w-full block" placeholder=""/>
          
          <label className="block text-gray-300 font-bold uppercase text-sm">CURRENT WEBSITE URL (IF APPLICABLE)</label>
          <input type="text" name="current_website" className="p-3 mb-5 bg-transparent border-b-2 border-gray-700 w-full block" placeholder="https://..."/>
          
          <label className="block text-gray-300 font-bold uppercase text-sm">Social Media Accounts</label>
          <small className="text-gray-400">This will help me understand your style better.</small>
          <textarea name="social_media" className="p-3 bg-transparent border-b-2 mb-5 border-gray-700 w-full block" rows="3" placeholder="List handles or links to your various social media accounts.."></textarea>
          
          <label className="block text-gray-300 font-bold uppercase text-sm">Additional info</label>
          <small className="text-gray-400">Is there anything you specifically need for your website?</small>
          <textarea name="social_media" className="p-3 bg-transparent border-b-2 border-gray-700 w-full block mb-5" rows="3" placeholder=""></textarea>
          <button className="rounded-full bg-blue-600 px-8 py-3 text-white block text-center w-full md:inline-block md:w-auto" type="submit">Submit</button>
          </div>
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
