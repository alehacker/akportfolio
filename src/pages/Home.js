import React from 'react';
import { Link } from "react-router-dom";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
 

function Home() {
   const form = useRef();
   
   const sendEmail = (e) => {
     e.preventDefault(); // prevents the page from reloading when you hit “Send”
   
     emailjs.sendForm('service_w4z1kst', 'template_1toztug', form.current, 'XURGSFAu2BrpOMaWQ')
       .then((result) => {
           // show the user a success message
           alert('Email sent successfully!')
           form.current.reset();
       }, (error) => {
           // show the user an error
           alert('Error sending Email, try again.')
       });
   };
   
  return (
   <div className='mt-60'>

      <div id='MainInfo' className="flex flex-col p-4 mt-56 home bg-aliceblue md:p-10 md:flex-row md:items-center md:justify-center">
         <div className="flex flex-col info md:p-10 md:justify-center ">
            <h1 className="text-4xl font-bold leading-tight myname md:leading-normal">I am Alejandra Kennedy</h1>
            <p className="mt-4 text-2xl leading-normal myselfp md:mt-6">I am a web developer with an Industrial Engineering background, proficient in JavaScript, CSS, HTML, and React. My experience as a teacher has taught me the importance of collaboration, communication, and adaptability. My goal is to leverage my skills to be a hardworking asset to any team, while also continuing to grow as a web developer</p>

            <div className="flex flex-row p-3 m-1 social md:p-2 ">
               <a href="https://github.com/alehacker" className="object-contain object-center w-10 h-10 mb-2 md:mb-0 md:mr-2" target="_blank" rel="noopener noreferrer">
                  <img src='/images/githublogo.png' alt='github'/>
               </a>
               <a href="https://twitter.com/AleInTech" className="object-contain object-center w-10 h-10 mb-2 md:mb-0 md:mr-2" target="_blank" rel="noopener noreferrer">
                  <img src='/images/twitterlogo.png' alt='twitter'/>
               </a>
               <a href="https://www.linkedin.com/in/alejandra-kennedy/" className="object-contain object-center w-10 h-10 md:mb-0" target="_blank" rel="noopener noreferrer">
                  <img src='/images/linkediicon.png' alt='linkedin'/>
               </a>
            </div>
            
            <div className="flex flex-row p-3 m-1 social md:p-2">
               <button className = 'px-4 py-2 font-bold text-white bg-black border-black rounded hover:bg-transparent hover:text-black hover:border'><a href='/images/ALEJANDRA KENNEDY - Resume.pdf' target="_blank">Resume</a> </button>
            </div> 
         </div>

         <div className="flex flex-col akphoto md:p-2">
               <img src='/images/akprofilepic.png' alt='AKPhoto' className="w-full max-w-full mx-auto md:max-w-none md:w-48"/>
               <div className='flex flex-row items-center justify-center gap-1 p-1 m-1 md:p-2 ' >
                  <img className= 'w-10 h-10 md:w-5 md:h-5'src='/images/emailicon.png' alt='email'/>
                  <p className='p-1 text-xl'>Reach Out</p>
               </div>
         </div>
      </div>

      <div className="flex flex-col gap-4 p-4 projects bg-aliceblue md:p-10 md:flex-row md:flex-wrap md:items-center md:justify-center">
         <h1 className="text-4xl font-bold leading-tight projectname md:leading-normal">Featured Projects</h1>
         <div className='flex flex-col p-4 home bg-aliceblue md:p-10 md:flex-row md:items-center md:justify-center'>  
            <div className="p-4 description md:p-0 md:w-1/2">  
               <a href='https://pageturnerslounge.netlify.app/' target="_blank" rel="noopener noreferrer">
                  <h1 className="text-4xl font-bold leading-tight projectname md:leading-normal">The Page Turners Lounge</h1> 
               </a>  
               <p className="mt-4 text-2xl leading-normal projectinfo md:mt-6">Teachers Resource Exchange is a site where teachers can upload and share teaching resources. This site was created using Express JS, Node JS, Handlebars, HTML, MongoDB, Bootstrap.Users can create accounts, browse and download resources.</p>
               <div className="flex flex-row p-3 m-1 social md:p-2 ">
                  <a href="https://github.com/alehacker/page-turner-client" target="_blank" rel="noopener noreferrer"
                      className="object-contain object-center w-10 h-10 mb-2 md:mb-0 md:mr-2 ">
                  <img src='/images/githublogo.png' alt='github'/></a>
                  <a href='https://pageturnerslounge.netlify.app/' target="_blank" rel="noopener noreferrer">
                     <button className="px-4 py-2 font-bold text-white bg-black border-black rounded hover:bg-transparent hover:text-black hover:border">Page Turners Lounge</button>
                  </a>
               </div>
            </div>

            <div className="flex flex-col gap-2 projectphoto md:p-2 md:w-1/2">
               <img src='/images/pageturner1.png' alt='project1Photo' className="w-full mx-auto h-80 md:max-w-none"/>
               <img src='/images/pageturner2.png' alt='project1Photo' className="w-full mx-auto h-80 md:max-w-none"/>
               
            </div> 
         </div> 


         {/* <div className='flex flex-col gap-5 mt-4 home bg-aliceblue md:flex-row md:justify-between'> */}
         <div className='flex flex-col p-4 home bg-aliceblue md:p-10 md:flex-row md:items-center md:justify-center'> 
            <div className="p-4 description md:p-0 md:w-1/2 md:order-2">
               <a href='https://alehacker.github.io/pong-game/' target="_blank" rel="noopener noreferrer">
                  <h1 className="text-4xl font-bold leading-tight projectname md:leading-normal">Pong Game</h1>
               </a>
               <p className="mt-4 text-2xl leading-normal projectinfo md:mt-6">This Pong game was created using HTML, JavaScript, and Canvas is a modern take on the classic arcade game. The game features a score counter at the top of the screen, which keeps track of each player's points. The score counter updates in real-time as the players score points. Additionally, there are sound effects that play when the ball hits a paddle or the top or bottom of the screen, which adds to the overall immersion of the game.</p>
               <div className="flex flex-row p-3 m-1 social md:p-2 ">
                  <a href="https://github.com/alehacker/pong-game" className="object-contain object-center w-10 h-10 mb-2 md:mb-0 md:mr-2" target="_blank" rel="noopener noreferrer">
                     <img src='/images/githublogo.png' alt='github'/>
                  </a>
                  <a href='https://alehacker.github.io/pong-game/' target="_blank" rel="noopener noreferrer">
                     <button className="px-4 py-2 font-bold text-white bg-black border-black rounded hover:bg-transparent hover:text-black hover:border ">Play Pong</button>
                  </a>
               </div> 
            </div> 
            <div className="flex flex-col gap-2 projectphoto md:p-2 md:w-1/2 md:order-1">
               <img src='/images/pong1.png' alt='project1Photo' className="w-full max-w-full mx-auto md:max-w-none"/>
               <img src='/images/pong2.png' alt='project1Photo' className="w-full max-w-full mx-auto md:max-w-none"/>
            </div>   
         </div>

         
         {/* <div className='flex flex-col gap-5 mt-4 home bg-aliceblue md:flex-row'>   */}
         <div className='flex flex-col p-4 home bg-aliceblue md:p-10 md:flex-row md:items-center md:justify-center'> 
            <div className="p-4 description md:p-0 md:w-1/2">    
               <h1 className="text-4xl font-bold leading-tight projectname md:leading-normal">Teachers RE</h1>
               <p className="mt-4 text-2xl leading-normal projectinfo md:mt-6">Teachers Resource Exchange is a site where teachers can upload and share teaching resources. This site was created using Express JS, Node JS, Handlebars, HTML, MongoDB, Bootstrap.Users can create accounts, browse and download resources.</p>
               <div className="flex flex-row p-3 m-1 social md:p-2 ">
                  <a href="https://github.com/alehacker/teachers-re" className="object-contain object-center w-10 h-10 mb-2 md:mb-0 md:mr-2" target="_blank" rel="noopener noreferrer">
                     <img src='/images/githublogo.png' alt='github'/>
                  </a>
                  <a href='https://teachers-resources.fly.dev/' target="_blank" rel="noopener noreferrer">
                     <button className="px-4 py-2 font-bold text-white bg-black border-black rounded hover:bg-transparent hover:text-black hover:border">Teachers RE</button>
                     {/* <button className="px-4 py-2 font-bold text-white bg-black rounded hover:bg-blue-200">Teachers RE</button> */}
                  </a>
               </div>
            </div>

            <div className="flex flex-col gap-2 projectphoto md:p-2 md:w-1/2">
               <img src='/images/teachersre1.png' alt='project3Photo' className="w-full max-w-full mx-auto md:max-w-none"/>
               <img src='/images/teachersre2.png' alt='project3Photo' className="w-full max-w-full mx-auto md:max-w-none"/>
            </div> 
         </div> 
      </div>

      {/* <div class=" flex flex-row justify-space  gap-3 home bg-aliceblue md:p-10 md:flex-row md:items-center md:justify-center">
         <div className='flex flex-col'>
             <img className='mb-1 h-34' src='/images/aklogo.png' alt='Logo' />
             
         </div>
         <form class="flex flex-col space-y-4" ref={form} onSubmit={sendEmail}>  
            <label class="text-gray-700 font-semibold" for="user_name">Name</label>
            <input class="border border-gray-400 rounded-lg py-2 px-3" type="text" id="user_name" name="user_name" required />

            <label class="text-gray-700 font-semibold" for="user_email">Email</label>
            <input class="border border-gray-400 rounded-lg py-2 px-3" type="email" id="user_email" name="user_email" required />

            <label class="text-gray-700 font-semibold" for="message">Message</label>
            <textarea class="border border-gray-400 rounded-lg py-2 px-3" id="message" name="message" required></textarea>

            <button class="px-4 py-2 font-bold text-white bg-black border-black rounded hover:bg-transparent hover:text-black hover:border" type="submit">Contact Me</button>
         </form>
         
      </div>
   </div> */}

   <div className="flex flex-row gap-3 justify-space home contact bg-aliceblue md:p-10 md:flex-row md:items-center md:justify-center">
      <div className='flex flex-col'>
         <img className='mb-1 h-34' src='/images/aklogo.png' alt='Logo' />
      </div>
      
      <form className="flex flex-col flex-1 space-y-4" ref={form} onSubmit={sendEmail}>  
         <label className="font-semibold text-gray-700" for="user_name">Name</label>
         <input className="px-3 py-2 rounded-lg" type="text" id="user_name" name="user_name" required />

         <label className="font-semibold text-gray-700" for="user_email">Email</label>
         <input className="px-3 py-2 rounded-lg" type="email" id="user_email" name="user_email" required />

         <label className="font-semibold text-gray-700" for="message">Message</label>
         <textarea className="px-3 py-2 rounded-lg" id="message" name="message" required></textarea>

         <button className="px-4 py-2 font-bold text-white bg-black border-black rounded hover:bg-transparent hover:text-black hover:border" type="submit">Contact Me</button>
      </form>
   </div>
   </div>

  )
}

export default Home;