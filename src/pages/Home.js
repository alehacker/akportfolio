import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
   <>

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

   <div class="projects bg-aliceblue p-4 gap-4 flex flex-col md:p-10 md:flex-row md:flex-wrap md:items-center md:justify-center">
      <div className='home home bg-aliceblue p-4 md:p-10 flex flex-col md:flex-row md:items-center md:justify-center'>  
         <div className="description p-4 md:p-0 md:w-1/2">    
            <h1 className="projectname text-4xl font-bold leading-tight md:leading-normal">The Page Turners Lounge</h1>
            <p className="projectinfo text-2xl leading-normal mt-4 md:mt-6">Teachers Resource Exchange is a site where teachers can upload and share teaching resources. This site was created using Express JS, Node JS, Handlebars, HTML, MongoDB, Bootstrap.Users can create accounts, browse and download resources.</p>
            <div className="social flex flex-row p-3 m-1 md:p-2 ">
               <a href="https://github.com/alehacker/page-turner-client" className="w-10 h-10 object-contain object-center mb-2 md:mb-0 md:mr-2">
               <img src='/images/githublogo.png' alt='github'/></a>
            </div>
         </div>

         <div className="projectphoto flex flex-col gap-2 md:p-2 md:w-1/2">
            <img src='/images/pageturner1.png' alt='project1Photo' className="w-50 h-80 md:max-w-none mx-auto"/>
            <img src='/images/pageturner2.png' alt='project1Photo' className="w-50 h-80  md:max-w-none mx-auto"/>
             
         </div> 
      </div> 
      <div className='home bg-aliceblue flex flex-col gap-5 mt-4 md:flex-row'>  

         <div className="projectphoto flex flex-col gap-2 md:p-2 md:w-1/2">
            <img src='/images/pong1.png' alt='project1Photo' className="w-full max-w-full md:max-w-none mx-auto"/>
            <img src='/images/pong2.png' alt='project1Photo' className="w-full max-w-full md:max-w-none mx-auto"/>
            
         </div> 
         
         <div className="p-4 md:p-0 md:w-1/2">    
            <h1 className="projectname text-4xl font-bold leading-tight md:leading-normal">Pong Game</h1>
            <p className="projectinfo text-2xl leading-normal mt-4 md:mt-6">This Pong game was created using HTML, JavaScript, and Canvas is a modern take on the classic arcade game. The game features a score counter at the top of the screen, which keeps track of each player's points. The score counter updates in real-time as the players score points. Additionally, there are sound effects that play when the ball hits a paddle or the top or bottom of the screen, which adds to the overall immersion of the game.</p>
            <div className="social flex flex-row p-3 m-1 md:p-2 ">
               <a href="https://github.com/alehacker/pong-game" className="w-10 h-10 object-contain object-center mb-2 md:mb-0 md:mr-2">
                  <img src='/images/githublogo.png' alt='github'/>
               </a>
            </div> 
         </div>

         
      </div> 
      <div className='home bg-aliceblue flex flex-col gap-5 mt-4 md:flex-row'>  
         <div className="p-4 md:p-0 md:w-1/2">    
            <h1 className="projectname text-4xl font-bold leading-tight md:leading-normal">Teachers RE</h1>
            <p className="projectinfo text-2xl leading-normal mt-4 md:mt-6">Teachers Resource Exchange is a site where teachers can upload and share teaching resources. This site was created using Express JS, Node JS, Handlebars, HTML, MongoDB, Bootstrap.Users can create accounts, browse and download resources.</p>
            <div className="social flex flex-row p-3 m-1 md:p-2 ">
               <a href="https://github.com/alehacker/teachers-re" className="w-10 h-10 object-contain object-center mb-2 md:mb-0 md:mr-2">
                  <img src='/images/githublogo.png' alt='github'/>
               </a>
            </div>
         </div>

         <div className="projectphoto flex flex-col gap-2 md:p-2 md:w-1/2">
            <img src='/public/images/teachersre1.png' alt='project3Photo' className="w-full max-w-full md:max-w-none mx-auto"/>
            <img src='/public/images/teachersre2.png' alt='project3Photo' className="w-full max-w-full md:max-w-none mx-auto"/>
             
         </div> 
      </div> 
</div>

   </>

  )
}

export default Home;