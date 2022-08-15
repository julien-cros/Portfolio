import type { NextPage } from 'next'
import Head from 'next/head'
import Aizzord from '../assets/Aizzord'
import ReactIcon from '../assets/ReactIcon'
import JSIcon from '../assets/JSIcon'
import CIcon from '../assets/CIcon'
import TwitterIcon from '../assets/Twittericon'
import IstaIcon from '../assets/InstaIcon'
import GithubIcon from '../assets/GithubIcon'

const Home: NextPage = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="px-4 py-4"><Aizzord width={100} /></div>
      <div className='flex flex-col items-center'>
        <h1 className="font-black py-28 text-7xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Hey, I&apos;m Julien.</h1>
        <p className="font-black py-4 text-5xl">I’m a French student,  web designer.</p>
        <p className="font-black py-4 text-5xl">I’ll pass the test to start my studies at the school 42 in Paris.</p>
        <p className="font-black py-4 pb-32 text-5xl">hehe.</p>
      </div>
      {/* <div className=" border-solid rounded-xl mx-96 py-4 px-8 border-4 border-white "> */}
        <div className="flex text-5xl pt-64 pb-4 font-black justify-center">What I have touch principally:</div>
        <div className="flex flex-row justify-center space-x-40 py-32 ">
          <button onClick={()=> window.open("https://beta.reactjs.org/","_blank")}><ReactIcon width={100} /></button>
          <button onClick={()=> window.open("https://www.javascript.com/","_blank")}><JSIcon width={100} /></button>
          <button onClick={()=> window.open("https://www.iso.org/standard/74528.html","_blank")}><CIcon width={100} /></button>
        </div>
      {/* </div> */}
        <p className="font-black flex justify-center text-5xl pt-96 pb-10">My career</p>
        <div className="font-black flex flex-col pl-5 text-4xl">
          <p className="border-b-4 border-t-4 border-white py-4 ml-5 mr-96"> 2018 - informatical class in Isaac de l'etoile.</p>
          <p className="border-b-4 border-white py-4 ml-5 mr-96"> 2021 - work for my own.</p>
          <p className="border-b-4 border-white py-4 ml-5 mr-96"> 2022 - pool in the school 42.</p>
       
      </div>
        <div className="flex justify-between px-64 pt-96 pb-10">
          <button onClick={()=>(window.open("https://twitter.com/juliencrosss","_blank"))}><TwitterIcon width={75}/></button>
          <button onClick={()=>(window.open("https://github.com/julien-cros","_blank"))}><GithubIcon width={75}/></button>
          <button onClick={()=>(window.open("https://www.instagram.com/julien_cros_/","_blank"))}><IstaIcon width={75}/></button>
        </div>


      {/* <h2 className="font-bold text-center ">Who i am?</h2> */}
    </div>
  )
}

export default Home
