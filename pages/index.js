import Image from "next/image";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { SiHashnode } from "react-icons/si";
import html from "../images/html.png";
import js from "../images/JS.png";
import mysql from "../images/mysql.png";
import csspng from "../images/csspng.png";
import python from "../images/python.png";
import react from "../images/react.png";
import kali from "../images/kali.png";
import nmap from "../images/nmap.png";
import burp from "../images/burp.png";
import c from "../images/c.png";

import kube from "../images/kube.png";
import docker from "../images/docker.png";

import git from "../images/git.png";

export default function Home() {
  return (
    <div className="">
      <div className="py-24 px-10  sm:px-2" id="home">
        <div className="px-20 text-left xl:px-6">
          <h2 className="font-bold py-2">Hey, I am Vinayak <span role="img" aria-label="wave">👋</span></h2>
          <p className="text-xl w-2/3 font-medium lg:w-full">A cybersecurity and devops enthusiast with a passion for continuously learning and staying up to date with the latest advancements in the field. </p>
        </div>
      </div>

      <div className="px-16 py-10 sm:px-8" id="about">
        <span className="text-4xl font-bold">About</span>
        <div className="h-0.5 my-2 bg-gradient-to-r from-gray-800"></div>
        <div className="grid grid-cols-2 py-8 xl:block">
          <div className="px-8 text-left xl:px-0">
            <span className="text-2xl font-semibold">Hello,</span>
            <p>
            Hey, my name is Vinayak GS, and as a student, I am deeply immersed in the fields of cybersecurity and devops. I have a strong interest in these areas and love learning about the latest technologies and tools. I am dedicated to constantly improving my skills and expanding my knowledge, and I find joy in coding and exploring new possibilities in the tech world. For me, being a student in cybersecurity and devops is an exciting journey of discovery and growth.
            </p>
          </div>

          <div className="px-8 text-left xl:px-0 xl:pt-8">
            <span className="text-2xl font-semibold">Education</span>
            <div className="flex justify-between italic">
              <span>M S Ramaiah University Of Applied Sciences</span>
              <span>Bengaluru</span>
              <span>2019-2023</span>
            </div>

          </div>
        </div>
      </div>

      <div className="px-16 py-10 sm:px-8" id="techstack">
        <span className="text-4xl font-bold">TechStack</span>
        <div className="h-0.5 my-2 bg-gradient-to-r from-gray-800"></div>
        <div className="grid grid-cols-4 gap-6 gap-x-32 py-8 xl:grid-cols-3 md:gap-x-20">
          
          


          <div className="flex justify-between items-center">
            <span className="font-semibold ml-16 xl:ml-0 sm:hidden">Html</span>
            <Image src={html} width={35} height={35} alt="typescript" />
          </div>  

          <div className="flex justify-between items-center">
            <span className="font-semibold ml-16 xl:ml-0 sm:hidden">CSS</span>
            <Image src={csspng} width={35} height={35} alt="typescript" />
          </div>

          <div className="flex justify-between items-center">
            <span className="font-semibold ml-16 xl:ml-0 sm:hidden">Javascript</span>
            <Image src={js} width={35} height={35} alt="typescript" />
          </div>          

          <div className="flex justify-between items-center">
            <span className="font-semibold ml-16 xl:ml-0 sm:hidden">C++</span>
            <Image src={c} width={35} height={35} alt="typescript" />
          </div>

          <div className="flex justify-between items-center">
            <span className="font-semibold ml-16 xl:ml-0 sm:hidden">Python</span>
            <Image src={python} width={35} height={35} alt="typescript" />
          </div>

          <div className="flex justify-between items-center">
            <span className="font-semibold ml-16 xl:ml-0 sm:hidden">React</span>
            <Image src={react} width={35} height={35} alt="typescript" />
          </div>

          <div className="flex justify-between items-center">
            <span className="font-semibold ml-16 xl:ml-0 sm:hidden">Git</span>
            <Image src={git} width={35} height={35} alt="typescript" />
          </div>

          

          <div className="flex justify-between items-center">
            <span className="font-semibold ml-16 xl:ml-0 sm:hidden">Docker</span>
            <Image src={docker} width={35} height={35} alt="typescript" />
          </div>

          <div className="flex justify-between items-center">
            <span className="font-semibold ml-16 xl:ml-0 sm:hidden">Kubernetes</span>
            <Image src={kube} width={35} height={35} alt="typescript" />
          </div>

          <div className="flex justify-between items-center">
            <span className="font-semibold ml-16 xl:ml-0 sm:hidden">MySQL</span>
            <Image src={mysql} width={35} height={35} alt="typescript" className="object-contain" />
          </div>

          <div className="flex justify-between items-center">
            <span className="font-semibold ml-16 xl:ml-0 sm:hidden">Kali-Linux</span>
            <Image src={kali} width={35} height={35} alt="typescript" className="object-contain" />
          </div>

          <div className="flex justify-between items-center">
            <span className="font-semibold ml-16 xl:ml-0 sm:hidden">Burpsuite</span>
            <Image src={burp} width={35} height={35} alt="typescript" />
          </div>

          <div className="flex justify-between items-center">
            <span className="font-semibold ml-16 xl:ml-0 sm:hidden">Nmap</span>
            <Image src={nmap} width={35} height={35} alt="typescript" className="object-contain" />
          </div>

        </div>
      </div>

      <div className="px-16 py-10 sm:px-8" id="projects">
        <span className="text-4xl font-bold">Projects</span>
        <div className="h-0.5 my-2 bg-gradient-to-r from-gray-800"></div>

        <div className="flex justify-between p-8 xl:block xl:px-0">
          <div className="">
            <div className="">
              <span className="text-2xl font-semibold xl:mr-4">Real-Estate Price Prediction</span>
              <p className="py-2">Python - Jupyter Notebook - Machine Learning - Visualization of data</p>
            </div>
            <div className="xl:my-2">
              <ul className="flex">
                <li className="pr-8 text-blue-800 font-medium"><a href="https://github.com/VinayakGS-22/Real_Estate-Prediciton/blob/main/RUAS%20RE.ipynb" target="_blank" rel="noreferrer">Github</a></li>
              </ul>
            </div>
          </div>

          <div className="w-3/5 xl:min-w-full">
            <ul className="list-disc font-medium xl:list-none">
              <li className="px-8 py-1.5 xl:px-4">A project based on Machine Learning , which predicts the price of the real-estate based on features</li>
              <li className="px-8 py-1.5 xl:px-4">Developed the software using Python and other modules</li>
              <li className="px-8 py-1.5 xl:px-4">Used Jupyter Notebook for writing and visualizing the code</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between p-8 xl:block xl:px-0">
          <div className="">
            <div className="">

              <span className="text-2xl font-semibold xl:mr-4">Sales-Data Insights using PowerBI</span>
              <p className="py-2">Data Analysis - MySQL - PowerBi</p>
            </div>
            <div className="xl:my-2">
            <ul className="flex">
              <li className="pr-8 text-blue-800 font-medium"><a href="https://github.com/VinayakGS-22/Sales_Insight_Of-a-XYZ-company" target="_blank" rel="noreferrer">Github</a></li>
            </ul>
            </div>
          </div>

          <div className="w-3/5 xl:min-w-full">
            <ul className="list-disc font-medium xl:list-none">
              <li className="px-8 py-1.5 xl:px-4">A PowerBi dashborad which can be used to analyze the data of the sales of the company</li>
              <li className="px-8 py-1.5 xl:px-4">Developed using PowerBi along with MySQL</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between p-8 xl:block xl:px-0">
          <div className="">
            <div className="">

              <span className="text-2xl font-semibold xl:mr-4">Advice-React-App</span>
              <p className="py-2">HTML - CSS - ReactJS</p>
            </div>
            <div className="xl:my-2">
            <ul className="flex">
              <li className="pr-8 text-blue-800 font-medium"><a href="https://vinayakgs-22.github.io/advice_react_app/" target="_blank" rel="noreferrer">Github</a></li>
            </ul>
            </div>
          </div>

          <div className="w-3/5 xl:min-w-full">
            <ul className="list-disc font-medium xl:list-none">
            <li className="px-8 py-1.5 xl:px-4">A website which gives you random advices uses API to fetch the Advice</li>
              <li className="px-8 py-1.5 xl:px-4">Developed a website using ReactJs</li>
              <li className="px-8 py-1.5 xl:px-4">Added styles using CSS</li>
            </ul>
          </div>
        </div>

      </div>

      <div className="px-16 py-10 sm:px-8" id="certifications">
        <span className="text-4xl font-bold">Certifications</span>
        <div className="h-0.5 my-2 bg-gradient-to-r from-gray-800"></div>

        <div className="flex justify-between p-8 xl:block xl:px-0">
          <div className="">
            <div className="">
              <span className="text-2xl font-semibold xl:mr-4">Ethical Hacking Essentials</span>
              <p className="py-2">Codered - EC-Council</p>
            </div>
            <div className="xl:my-2">
              <ul className="flex">
                <li className="pr-8 text-blue-800 font-medium"><a href="https://codered.eccouncil.org/certificate/bb3dede7-ce4d-4691-8fc1-51a4226df7a7?logged=true" target="_blank" rel="noreferrer">Codered</a></li>
              </ul>
            </div>
          </div>

          <div className="w-3/5 xl:min-w-full">
            <ul className="list-disc font-medium xl:list-none">
              <li className="px-8 py-1.5 xl:px-4">Learnt about Information Security Fundamentals and Ethical Hacking Fundamenmtals</li>
              <li className="px-8 py-1.5 xl:px-4">Information Security and Vulnerability Assessment</li>
              <li className="px-8 py-1.5 xl:px-4">Countermeasures for the threats</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between p-8 xl:block xl:px-0">
          <div className="">
            <div className="">

              <span className="text-2xl font-semibold xl:mr-4">Learning Python</span>
              <p className="py-2">Linkedin Learning</p>
            </div>
            <div className="xl:my-2">
            <ul className="flex">
              <li className="pr-8 text-blue-800 font-medium"><a href="https://www.linkedin.com/learning/certificates/0a7c79abfb5275313a18d12b27ed5cb78e27ce03a14b33b6fca7298889502827" target="_blank" rel="noreferrer">Linkedin</a></li>
            </ul>
            </div>
          </div>

          <div className="w-3/5 xl:min-w-full">
            <ul className="list-disc font-medium xl:list-none">
              <li className="px-8 py-1.5 xl:px-4">Python Basics and Files system</li>
              
            </ul>
          </div>
        </div>

        <div className="flex justify-between p-8 xl:block xl:px-0">
          <div className="">
            <div className="">

              <span className="text-2xl font-semibold xl:mr-4">Developer-Virtual Experience - Accenture</span>
              <p className="py-2">The Forage - Accenture Nordics</p>
            </div>
            <div className="xl:my-2">
            <ul className="flex">
              <li className="pr-8 text-blue-800 font-medium"><a href="https://www.theforage.com/profile/FRtw6oRTLhN7anPZA?ref=FRtw6oRTLhN7anPZA" target="_blank" rel="noreferrer">Forage</a></li>
            </ul>
            </div>
          </div>

          <div className="w-3/5 xl:min-w-full">
            <ul className="list-disc font-medium xl:list-none">
            <li className="px-8 py-1.5 xl:px-4">Skills gained in Python , Unit testing</li>
              <li className="px-8 py-1.5 xl:px-4">Identity Management & HTML Requests</li>
            </ul>
          </div>
        </div>

      </div>
      <div className="px-16 py-10 sm:px-8" id="contact">
        <span className="text-4xl font-bold">Contact</span>
        <div className="h-0.5 my-2 bg-gradient-to-r from-gray-800"></div>
        <p className="font-medium py-1 text-lg">Like my work? I am always open to collaborating on projects and innovative ideas</p>
        <p className="font-medium py-1 text-lg">Find out more about me & feel free to connect with me here :</p>
        <ul className="flex text-xl mt-2">
          <li className="text-blue-500 mr-10"><a href="https://github.com/VinayakGS-22" target="_blank" rel="noreferrer"><AiFillGithub /></a></li>
          
          <li className="text-blue-500 mr-10"><a href="https://www.linkedin.com/in/vinayak-gs-7174571b0/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a></li>
          
        </ul>
      </div>
    </div>
  )
}
