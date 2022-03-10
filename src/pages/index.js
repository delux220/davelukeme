import React from "react"
import { graphql, Link } from "gatsby"
import { ChevronDownIcon, ColorSwatchIcon, CalendarIcon, MicrophoneIcon, MailIcon, PencilIcon, UserIcon, SearchIcon, InformationCircleIcon, LightningBoltIcon } from '@heroicons/react/solid'

import Layout from "~/components/layout"
import SEO from "~/components/seo"
import CategoryList from "~/components/category-list"
import PageHeading from "~/components/styled/page-heading"

const IndexPage = ({ data: { allStrapiCategory } }) => {
  const categories = allStrapiCategory.edges
  const seo = { title: "Funny Sites - Custom Sites for NYC Comics and Podcast Hosts" };

  const [email, setEmail] = React.useState('');

  const [name, setName] = React.useState('');

  const [error, setError] = React.useState('');

  const [accordion, setAccordion] = React.useState(0);

  const handleSubmit = (e) => {
      setError('');
      if (email.trim().length == 0 || name.trim().length == 0) {
        setError('Email address and your name are required fields.');
        e.preventDefault();
        return false;
      }
      return true;
  };

  const cards = [
    {title: 'Kickoff', description: 'Fill out the form below to reach out to me. This will also provide an understanding of your technical + design needs, and what you ultimately want to achieve with your site. You will also need to send me any graphical assets you would like to use, such as photos or podcast art.'},
    {title: 'First Draft', description: 'Based on the information and requirements you provide, I will design and develop a first draft of your website.'},
    {title: 'Feedback', description: 'Let me know what you think! Does the design complement your comedic style? Is the functionality sufficient to accomplish your goals?'},
    {title: 'Second Pass', description: 'Based on your feedback, I will implement the necessary changes.'},
    {title: 'Content', description: 'At this point, you will need to provide the actual content. Examples of this can include a biography for an "About me" page or descriptions for your podcasts. I will also show you how to update your website and add shows.'},
    {title: 'Launch', description: 'I will make some final checks to ensure that all loose ends are addressed. I will ensure that you are showing up in search engines, and that your link preview is being rendered correctly on social media. Otherwise, you are ready to go! '},
  ];


  return (
    <Layout className="bg-black">
    <div className="bg-black">
      <SEO seo={seo} />
      <div className="bg-cover bg-center relative" style={{backgroundImage:"url('https://res.cloudinary.com/meshed-nyc/image/upload/v1645540253/matthias-wagner-QrqeusbpFMM-unsplash_szsxzv.jpg')"}}>
      <div className="container mx-auto flex h-screen justify-end items-end p-6 md:p-10">
        <div className="text-center w-full">
          <h1 className="font-slab mb-10 mx-auto lg:w-2/3 text-white animate-fadeIn transition ease-in-out scale-110 duration-300" style={{fontSize:'50px', lineHeight:'70px'}}>Having a website should be as painless as possible.</h1>
          
          <h4 className="font-sans text-white mb-10 uppercase" style={{letterSpacing: '2px'}}>Custom built websites for NYC based comedians</h4>
          
          <a href="#contact" className="px-8 py-3 mb-10 bg-black text-white font-sans rounded-full inline-block">Get Started</a>
        </div>
        <div className="text-center absolute w-full" style={{bottom:0, left:0}}>
        <ChevronDownIcon className="mx-auto animate-bounce h-10 w-10 block text-white opacity-50"/>
        </div>
      </div>
      </div>

      <div className="bg-black">
      <div className="container mx-auto px-10 md:mb-10 py-20">
      <div className=" flex items-center md:mb-0 mb-10 lg:w-2/3">
          <div className="">
          <h1 className="font-serif mb-5 inline text-white">Focus on the laughs, not the tech</h1>
          <p className="font-sans my-5 text-gray-400">Even the more popular website solutions like Wordpress or Squarespace can be difficult to navigate / maintain, when you just want a straight forward website to showcase your comedy. </p>
          
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
            <p className="text-gray-500">Make sure you're found when being Googled. I will do the legwork to make sure your site shows up in search engines.</p>
          </div>
          <div className="bg-gray-900 p-6">
            <div className="bg-blue-600 h-10 w-10 rounded-full mb-5 flex justify-center items-center mx-auto md:mx-0">
              <MailIcon className="fa-regular fa-palette text-white w-5 h-5"/>
            </div>
            <strong className="text-white mb-2 block text-center md:text-left">MAILING LISTS</strong>
            <p className="text-gray-500">Mailing lists can be future free marketing. Grow your mailing list and reach more subscribers.</p>
          </div>
          <div className="bg-gray-900 p-6">
            <div className="bg-blue-600 h-10 w-10 rounded-full mb-5 flex justify-center items-center mx-auto md:mx-0">
              <PencilIcon className="fa-regular fa-palette text-white w-5 h-5"/>
            </div>
            <strong className="text-white mb-2 block text-center md:text-left">CONTACT FORM</strong>
            <p className="text-gray-500">Receive inquiries from your website visitors. Prevent spam by having a protected contact form.</p>
          </div>
          <div className="bg-gray-900 p-6">
            <div className="bg-blue-600 h-10 w-10 rounded-full mb-5 flex justify-center items-center mx-auto md:mx-0">
              <InformationCircleIcon className="fa-regular fa-palette text-white w-5 h-5"/>
            </div>
            <strong className="text-white mb-2 block text-center md:text-left">CONTENT PAGES</strong>
            <p className="text-gray-500">Get up to 3 additional content-based pages. Include an About page to share an engaging bio with your audience.</p>
          </div>
          <div className="bg-gray-900 p-6">
            <div className="bg-blue-600 h-10 w-10 rounded-full mb-5 flex justify-center items-center mx-auto md:mx-0">
              <LightningBoltIcon className="fa-regular fa-palette text-white w-5 h-5"/>
            </div>
            <strong className="text-white mb-2 block text-center md:text-left">BLAZING FAST</strong>
            <p className="text-gray-500">Sites are custom coded using technology specializing in fast page loads and seamless navigation.</p>
          </div>
        </div>
      </div>
      <div className="container bg-blue-900 mx-auto text-white p-10 mt-20 my-32 grid md:grid-cols-2">
        <div className="">
          <h1 className="font-serif text-white mb-5">Let's make this easy</h1>
          <p className="text-white mb-5">This is my general process to get your website designed, developed, and up and running. Each project is unique in its needs, but here is what you can expect.</p>
       
          <p className="text-white mb-5">I'm always happy to answer any questions you may have along the way!</p>
          <a href="#contact" className="px-10 py-3 bg-black text-white rounded-full hidden md:inline-block">Get Started</a>
        </div>
        <div class="grid  col-span-1 gap-2">
            {
              cards.map((card, i) => <div className="cursor-pointer bg-blue-800 p-5" onClick={() => setAccordion(i)} key={`accordion-${i}`}>
                <strong className="text-white block uppercase">{(i+1)}. {card.title}</strong>
                <div className="overflow-hidden transition-all duration-500 ease-in-out" style={{height: (i==accordion)?'auto':'0px'}}>
                  {(i==accordion)&&<p className="text-blue-300 mt-3">{card.description}</p>}
                </div>
              </div>)
            }



            
        </div>
      </div>

      <div className="container mx-auto p-10 mb-10 grid md:grid-cols-3 mt-20" id="about">
      <div className="hidden md:block relative mb-32 md:pr-10">
            <img src="https://res.cloudinary.com/meshed-nyc/image/upload/v1638307749/dave_t4vbsk.jpg" className="rounded-full max-w-full"/>
          
      </div>
      <div className="text-black md:col-span-2 mb-5">
          <h1 className="mb-5 font-serif text-white">Pleased to meet you. I'm Dave!</h1>
          <p className="my-5 text-gray-400">Thanks for your interest! Here is a little information about myself..</p>
          <p className="my-5 text-gray-400">I'm a Queens based website developer with over 15 years experience in web development. </p>
          <p className="my-5 text-gray-400">My passion is to help self-starters pursue their dreams. I have always admired those who venture off on their own to make things happen, whether they be entrepreneurs, artists, or comedians. With my knowledge and experience in tech, I hope to assist you in promoting your comedy career.</p>
          <p className="my-5 text-gray-400">I have a 13 year old puggle named Bagel who enjoys treats and knocking over the garbage.</p>
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
        <form action="#" netlify-honeypot="bot-field" data-netlify="true" name="contact" netlify method="POST" id="contact-form" onSubmit={handleSubmit}>
          <input type="hidden" name="bot-field" />
           <input type="hidden" name="form-name" value="contact" />
          <label className="block text-gray-300 font-bold uppercase text-sm">Email Address *</label>
          <input type="email" name="email" className="p-3 text-white bg-transparent border-b-2 border-gray-700 mb-5 w-full block" placeholder="you@email.com" value={email} onChange={(e) => setEmail(e.value)}/>
          
          <label className="block text-gray-300 font-bold uppercase text-sm">Full Name *</label>
          <input type="text" name="name" className="p-3 text-white mb-5 bg-transparent border-b-2 border-gray-700 w-full block" placeholder="" value={name} onChange={(e) => setName(e.value)}/>
          
          <label className="block text-gray-300 font-bold uppercase text-sm">CURRENT WEBSITE URL (IF APPLICABLE)</label>
          <input type="text" name="current_website" className="p-3 text-white mb-5 bg-transparent border-b-2 border-gray-700 w-full block" placeholder="https://..."/>
          
          <label className="block text-gray-300 font-bold uppercase text-sm">Social Media Accounts</label>
          <small className="text-gray-400">This will help me understand your style better.</small>
          <textarea name="social_media" className="p-3 text-white bg-transparent border-b-2 mb-5 border-gray-700 w-full block" rows="3" placeholder="List handles or links to your various social media accounts.."></textarea>
          
          <label className="block text-gray-300 font-bold uppercase text-sm">Additional info</label>
          <small className="text-gray-400">Is there anything you specifically need for your website?</small>
          <textarea name="additional_info" className="p-3 text-white bg-transparent border-b-2 border-gray-700 w-full block mb-5" rows="3" placeholder=""></textarea>
          
          {
            error.length>0&&<div className="text-red-400 mb-5">{error}</div>
          }

          <button className="rounded-full bg-blue-600 px-8 py-3 text-white block text-center w-full md:inline-block md:w-auto" type="submit">Submit</button>
         </form>
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
