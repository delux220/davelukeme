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
  const page = data.strapiContactPage

  const seo = {
    title: page.Title
  }

  const [token, setToken] = React.useState();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

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
            <h1 className="mb-10 font-serif">{page.Title}</h1>
            <ReactMarkdown>{page.Description}</ReactMarkdown>
          </div>
        </div>
        <div className="px-10">
        <GoogleReCaptchaProvider reCaptchaKey="6LfCenkdAAAAADS0P61jXEOZsd-aJpAlmh5yp9dq">
          <form action={page.FormURL} method="POST" onSubmit={validate}>
          
          <label className="text-sm font-sans font-bold text-gray-700 uppercase">Full Name</label>
          <input type="text" className="font-serif block border-b p-5 w-full mb-5" placeholder="Your name" value={name} onChange={(name) => setName(name.value)}/>
          <label className="text-sm font-sans font-bold text-gray-700 uppercase">Email Address</label>
          <input type="email" className="block border-b p-5 w-full font-serif mb-5" placeholder="you@email.com" value={email} onChange={(email) => setEmail(email.value)}/>
          <label className="text-sm font-sans font-bold text-gray-700 uppercase">Message</label>
          <input type="hidden" name="g-recaptcha-response" value={token}  />
          <GoogleReCaptcha
                onVerify={token => {
                  setToken(token)
                }}
              />
          <textarea className="block w-100 border-b p-5 w-full font-serif mb-5" rows="4" placeholder="Hello, Dave and pleased to meet you!" onChange={(e) => setMessage(e.value)} value={message}></textarea>
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
  query ContactQuery {
    strapiContactPage {
      Title
      Description
      FormURL
      
    }
  }
`

export default ProjectPage
