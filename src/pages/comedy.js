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

const ComedyForm = ({ data }) => {
  //alert(data);
  const page = data.strapiContactPage

  const seo = {
    title: page.Title
  }

  const [token, setToken] = React.useState();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [currentWebsite, setCurrentWebsite] = React.useState('');

  const validate= (e) => {

    setErrorMessage('');
    
    var error = false;

    if (name == '' || email == '' || message == '') {
      error =  true;
    }

    if (error) {
      e.preventDefault();
      setErrorMessage("All fields are required");
      return false;
    }


    return true;

    
  }
  
  return (
    <Layout dark={true}>
      <SEO seo={seo} />
      <div className="bg-white">
      <div className="container mx-auto pt-40">
        
        </div>
        <div className="container mx-auto mb-20 grid md:grid-cols-2">
        <div className="px-10 mb-20">
          <div>
            <h1 className="mb-5 font-serif">Comedy Websites</h1>
            <h3 className="mb-10 font-bold text-green-600 font-serif">$300</h3>
            <p className="mb-5">Have a professionally designed personal website built for your comedy career.</p>
            <ul className="list-disc ml-10 mb-5">
              <li>Market yourself with a clean + professional design</li>
              <li>List upcoming shows easily</li>
              <li>Showcase your podcast(s)</li>
              <li>Integrate Mailchimp to build your mailing list</li>
              <li>Promote your social media accounts + patreon</li>
              <li>Host a contact form, reducing spam messages</li>
              <li>Includes two revision passes</li>
              <li>Built with blazing fast technology</li>
            </ul>
            <p className="mb-5"><strong>An online store is not included in the $300 price point.</strong> If you already have a store separately (for example on Shopify), I can link to it however.</p>
            
          </div>
        </div>
        <div className="px-10">
        <GoogleReCaptchaProvider reCaptchaKey="6LfCenkdAAAAADS0P61jXEOZsd-aJpAlmh5yp9dq">
          <form action={page.FormURL} method="POST" onSubmit={validate}>
          <label className="text-sm font-sans font-bold text-gray-700 uppercase">Full Name</label>
          <input type="text" className="font-serif block border-b p-5 w-full mb-5" placeholder="Your name" value={name} onChange={(name) => setName(name.value)}/>
          <label className="text-sm font-sans font-bold text-gray-700 uppercase">Email Address</label>
          <input type="email" className="block border-b p-5 w-full font-serif mb-5" placeholder="you@email.com" value={email} onChange={(email) => setEmail(email.value)}/>
          <label className="text-sm font-sans font-bold text-gray-700 uppercase">Your Current Website (if applicable)</label>
          <input type="url" className="block border-b p-5 w-full font-serif mb-5" placeholder="https://..." value={currentWebsite} onChange={(site) => setCurrentWebsite(site.value)}/>
          <label className="text-sm font-sans font-bold text-gray-700 uppercase">Social Media Links</label>
          <textarea className="block border-b p-5 w-full font-serif mb-5" rows="4" placeholder="Enter one social media link per line"></textarea>
          <label className="text-sm font-sans font-bold text-gray-700 uppercase">References / Inspiration</label>
          <p className="font-sans text-xs">Do you have examples of website designs that you like? Examples will help me understand what style you are going for..</p>
          <textarea className="block border-b p-5 w-full font-serif mb-5" rows="4" placeholder="Paste links to websites here..."></textarea>
          <label className="text-sm font-sans font-bold text-gray-700 uppercase">Additional Details</label>
          <input type="hidden" name="g-recaptcha-response" value={token}  />
          <GoogleReCaptcha
                onVerify={token => {
                  setToken(token)
                }}
              />
          <textarea className="block w-100 border-b p-5 w-full font-serif mb-5" rows="4" placeholder="Tell me anything I should know about your website needs.." onChange={(e) => setMessage(e.value)} value={message}></textarea>
          {
            errorMessage!=''&&<div className="my-10 text-red-500">{errorMessage}</div>
          }
          <button className="bg-black py-5 px-10 text-white font-sans">Submit</button>
        </form>
        </GoogleReCaptchaProvider>
        </div>
        </div>



      </div>
      
    </Layout>
  )
}

export const query = graphql`
  query ContactQuery2 {
    strapiContactPage {
      Title
      Description
      FormURL
      
    }
  }
`

export default ComedyForm
