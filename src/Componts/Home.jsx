import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/hero image.jpg'

const Home = ({ darkMode }) => {
  const shellClass = darkMode
    ? 'min-h-[88vh] bg-slate-950 text-white'
    : 'min-h-[88vh] bg-slate-100 text-slate-900'

  const outlineClass = darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'
  const badgeClass = darkMode
    ? 'border-blue-500/50 bg-blue-500/10 text-blue-400'
    : 'border-blue-300 bg-blue-100 text-blue-700'
  const pillClass = darkMode
    ? 'bg-slate-800 text-slate-100'
    : 'bg-slate-200 text-slate-800'
  const textMuted = darkMode ? 'text-slate-300' : 'text-slate-700'
  const secondaryButtonClass = darkMode
    ? 'border-slate-500 hover:bg-slate-800 text-white'
    : 'border-slate-300 hover:bg-slate-200 text-slate-800'

  return (
    <div className={`${shellClass} flex items-center justify-center px-4 py-10 sm:px-6 sm:py-12`}>
      <div className='grid w-full max-w-6xl items-center gap-8 md:grid-cols-2 md:gap-10'>
        <div className='order-1 flex justify-center md:order-1'>
          <div className={`relative rounded-4xl border p-3 shadow-2xl shadow-blue-500/10 ${outlineClass}`}>
            <img
              src={heroImage}
              alt='Rahul Kumar'
              className='h-[280px] w-[220px] rounded-3xl object-cover object-center sm:h-[360px] sm:w-[280px] md:h-[420px] md:w-[320px]'
            />
          </div>
        </div>

        <div className='order-2 space-y-6 text-center md:order-2 md:text-left'>
          <span className={`inline-block rounded-full border px-4 py-2 text-sm font-medium ${badgeClass}`}>
            Software Engineering Student
          </span>
          <h1 className='text-4xl font-bold leading-tight sm:text-5xl md:text-6xl'>
            Hi, I&apos;m <span className='text-blue-500'>Rahul Kumar</span>
          </h1>
          <p className={`text-base sm:text-lg md:text-xl ${textMuted}`}>
            I am a software engineering student passionate about building clean, responsive, and efficient digital experiences.
            I enjoy learning modern web technologies, solving real-world problems, and improving my skills in development and system design.
          </p>
          <div className='flex flex-wrap justify-center gap-4 md:justify-start'>
            <Link to='/projects' className='rounded bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-500'>View Projects</Link>
            <Link to='/contact' className={`rounded border px-5 py-3 font-medium ${secondaryButtonClass}`}>Contact Me</Link>
          </div>
          <div className='flex flex-wrap justify-center gap-3 pt-2 md:justify-start'>
            <span className={`rounded-full px-3 py-1 text-sm ${pillClass}`}>Web Developer</span>
            <span className={`rounded-full px-3 py-1 text-sm ${pillClass}`}>DSA in C++</span>
            <span className={`rounded-full px-3 py-1 text-sm ${pillClass}`}>Cybersecurity Enthusiast</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
