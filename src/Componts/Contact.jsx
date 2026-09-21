import React, { useState } from 'react'

const Contact = ({ darkMode }) => {
  const [submitted, setSubmitted] = useState(false)

  const shellClass = darkMode
    ? 'min-h-[88vh] bg-slate-950 text-white'
    : 'min-h-[88vh] bg-slate-100 text-slate-900'

  const cardClass = darkMode
    ? 'bg-slate-900 border border-slate-700'
    : 'bg-white border border-slate-200'

  const inputClass = darkMode
    ? 'border-slate-700 bg-slate-800 text-white placeholder:text-slate-400'
    : 'border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-500'

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className={`${shellClass} px-6 py-16`}>
      <div className='mx-auto max-w-4xl'>
        <div className='mb-10 text-center'>
          <p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500'>Contact</p>
          <h2 className='text-4xl font-bold'>Let&apos;s connect</h2>
        </div>

        <div className={`${cardClass} rounded-2xl p-8 shadow-lg`}>
          <form className='grid gap-6' onSubmit={handleSubmit}>
            <div className='grid gap-6 md:grid-cols-2'>
              <input
                type='text'
                placeholder='Your name'
                className={`rounded-xl border px-4 py-3 outline-none focus:border-blue-500 ${inputClass}`}
                required
              />
              <input
                type='email'
                placeholder='Your email'
                className={`rounded-xl border px-4 py-3 outline-none focus:border-blue-500 ${inputClass}`}
                required
              />
            </div>

            <input
              type='text'
              placeholder='Subject'
              className={`rounded-xl border px-4 py-3 outline-none focus:border-blue-500 ${inputClass}`}
              required
            />

            <textarea
              rows='5'
              placeholder='Your message'
              className={`rounded-xl border px-4 py-3 outline-none focus:border-blue-500 ${inputClass}`}
              required
            ></textarea>

            <button type='submit' className='w-fit rounded bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-500'>Send Message</button>
          </form>

          {submitted && (
            <p className='mt-4 text-sm text-green-400'>Thanks for reaching out! I&apos;ll get back to you soon.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact
