import React from 'react'

const Skills = ({ darkMode }) => {
  const shellClass = darkMode
    ? 'min-h-[88vh] bg-slate-950 text-white'
    : 'min-h-[88vh] bg-slate-100 text-slate-900'

  const cardClass = darkMode
    ? 'bg-slate-900 border border-slate-700 text-slate-100'
    : 'bg-white border border-slate-200 text-slate-800'

  const skillGroups = [
    {
      title: 'Web Development',
      items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB']
    },
    {
      title: 'Data Structures & Algorithms',
      items: ['C++', 'Problem Solving', 'Arrays', 'Strings', 'Trees', 'Graphs', 'Dynamic Programming']
    },
    {
      title: 'Core Concepts',
      items: ['Operating Systems', 'DBMS', 'System Design', 'Computer Networks', 'Cybersecurity', 'Software Fundamentals']
    }
  ]

  return (
    <div className={`${shellClass} px-6 py-16`}>
      <div className='mx-auto max-w-6xl'>
        <div className='mb-10 text-center'>
          <p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500'>Skills</p>
          <h2 className='text-4xl font-bold'>Technologies and concepts I work with</h2>
        </div>

        <div className='grid gap-8 md:grid-cols-3'>
          {skillGroups.map((group) => (
            <div key={group.title} className={`${cardClass} rounded-2xl p-6 shadow-lg`}>
              <h3 className='mb-5 text-2xl font-semibold'>{group.title}</h3>
              <div className='flex flex-wrap gap-3'>
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className='rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-2 text-sm font-medium text-blue-400'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
