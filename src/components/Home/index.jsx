import React from "react";
import Topaz from "../../../src/Topaz_img.jpg"
import "./index.css"
import {GoMail} from "react-icons/go";
import {BiPhone} from "react-icons/bi";
import {HiLocationMarker} from "react-icons/hi";
import {AiFillLinkedin} from "react-icons/ai";

 function Home(){

    return (
       
<main className="theMain">
   <h1>Bankole Temitope Olaitan</h1>
   <h2>Frontend Web Developer</h2> <br />
   <pre><GoMail /> bankoletemitope11@gmail.com            <BiPhone /> 07016137638</pre>
   <pre><HiLocationMarker /> 9, Odunlade Street, Shomolu, Lagos State.                <AiFillLinkedin /> <a href="https://www.linkedin.com/in/bankole-temitope-ba7556224">
    https://www.linkedin.com/in/bankole-temitope-ba7556224</a></pre> <br />

<section className="About_me">
    <img src={Topaz} alt="" className="Image"/>
    <div>A recent graduate of University of Lagos, a motivated, passionate, and adaptable. Seeking internship opportunity to begin
        a new career in software engineering (Frontend Developer), learn, gain valuable experience, and contribute to the success of
         an organisation. A resilient learner with the drive to achieve goals and reach milestone.
    </div> <br/>
    </section>
    <div className="about-tech"> <h3>Technical Skills</h3>
         <pre><p><b className="text">Programming Languages:</b> HTML, CSS, Javascript </p>  <br /><b className="text">Other tools:</b> Slack, Jira</pre> 
         <pre><p> <b className="text">Frontend Library:</b> React</p><br /> <b className="text">Soft Skills:</b> Adaptability, Flexibility, Teamwork </pre>        
     </div>

     
    <div className="about-pro">
         <h3 className="pro">Projects</h3>
    <pre>
         <ul>
            <li>
               <a href="https://calculator-app-5939a.web.app">https://calculator-app-5939a.web.app :</a>  A simple calculator built with react and hosted on firebase. 
            </li>
            <li>
                <a href="https://useinfo-assignment-2.temitopaz.repl.co/">https://useinfo-assignment-2.temitopaz.repl.co/ :</a>  A simple webpage getting data from an API database. <br /> I also implemented pagination
            </li>
            <li>
                <a href="https://6368ed15991d2312bccdee61--fascinating-torte-72a0b6.netlify.app/">
                https://6368ed15991d2312bccdee61--fascinating-torte-72a0b6.netlify.app/ :</a>  A website with React-router, <br /> implemented nested routes, 
                404 page, 
                and Error boundary. It also has a fake userAuthContext,<br /> using the context API to always carry out a fake authentication.
                 The website was hosted on Netlify.
             </li>    
            </ul>    
            </pre>              
     </div>


<br/>

    <section className="about_cert">  
        <h3>Education and Certification</h3>
        <div>
            <ul>
               <li><b>Bachelor of Science (B.Sc) in Microbiology</b> <br/> University of Lagos, Akoka, Lagos State. <br/> 2021
               </li> 
               <li><b>S.S.C.E.</b> <br/> Radiance B & G College, Agbado, Ogun State. <br/> 2014
               </li> 
            </ul>
        </div>
    </section>
   
    <section className="about_work">
        <h3>Work Experience</h3>
        <div> 
           <p>AB Microfinance Bank</p>
           <b><p> HR Assistance</p> </b> April 2022 - Present
        </div>
        <div>
            <p>Key Resposibilites </p>
            <ul>
                <li>Manage and update employee record</li>
                <li>Asisted in recruitment processes</li>
                <li>Carry out reference check for past employers</li>
                <li>Record employee's absent and leaves</li>
            </ul>
        </div>
    </section>
    <section className="About_work">
        <h3></h3>
        <div>
            <p>Central Research Laboratory of College of Medicine, University of Lagos</p>
             <b><p>Trainee</p></b> Nov 2019 - Jan 2020
        </div>
        <div>
            <p>Key Resposibilites </p>
            <ul>
                <li>Carried out Hepatitis B virus profile using rapid kit</li>
                <li>Assisted in coordinating microbioogical practical fro medical students</li>
                <li>Count in HIV positive children</li>
                <li>Assisted in invigilating post graduate students' examination</li>
            </ul>
        </div>
    </section>      

    <section className="about_fun">
        <div>
         <h3>Hobbies and Interests</h3>
         <ul>
             <li>Volunteering</li>
             <li>Research</li>
             <li>Learning new skills</li>
         </ul>
        </div> 
     </section>
</main>
    )
}

export default Home;