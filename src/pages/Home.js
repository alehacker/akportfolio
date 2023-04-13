import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
   <div className="home bg-aliceblue p-4 md:p-10 flex flex-col md:flex-row md:items-center md:justify-center">
      <div className="info flex flex-col md:p-10 md:justify-center ">
         <h1 className="myname text-4xl font-bold leading-tight md:leading-normal">I am Alejandra Kennedy</h1>
         <p className="myselfp text-2xl leading-normal mt-4 md:mt-6">I am a web developer with an Industrial Engineering background, proficient in JavaScript, CSS, HTML, and React. My experience as a teacher has taught me the importance of collaboration, communication, and adaptability. My goal is to leverage my skills to be a hardworking asset to any team, while also continuing to grow as a web developer</p>

         <div className="social flex flex-row p-3 m-1 md:p-2 ">
         <a href="https://github.com/alehacker" className="w-10 h-10 object-contain object-center mb-2 md:mb-0 md:mr-2">
            <img src='/images/githublogo.png' alt='github'/>
         </a>
         <a href="https://twitter.com/AleInTech" className="w-10 h-10 object-contain object-center mb-2 md:mb-0 md:mr-2">
            <img src='/images/twitterlogo.png' alt='twitter'/>
         </a>
         <a href="https://www.linkedin.com/in/alejandra-kennedy/" className="w-10 h-10 object-contain object-center md:mb-0">
            <img src='/images/linkediicon.png' alt='linkedin'/>
         </a>
      </div>
      
  </div>
 


  <div className="akphoto flex flex-col  md:p-2">
      <img src='/images/akprofilepic.png' alt='AKPhoto' className="w-full max-w-full md:max-w-none md:w-48 mx-auto"/>
      <div className='flex flex-row  gap-1 p-1 m-1 justify-center items-center md:p-2 ' >
         <img className= 'w-10 h-10 md:w-5 md:h-5'src='/images/emailicon.png' alt='email'/>
         <p className='text-xl p-1'>Reach Out</p>
      </div>
  </div>
</div>

  )
}

export default Home;