import React from 'react'

const Projects = ({ darkMode }) => {
    const shellClass = darkMode
        ? 'min-h-[88vh] bg-slate-950 text-white'
        : 'min-h-[88vh] bg-slate-100 text-slate-900'

    const cardClass = darkMode
        ? 'bg-slate-900 border border-slate-700'
        : 'bg-white border border-slate-200'

    const descriptionClass = darkMode ? 'text-slate-300' : 'text-slate-700'

    const projectList = [
        {
            title: 'Calculator App',
            tech: 'HTML, CSS, JavaScript',
            description: 'A simple and responsive calculator built with HTML, CSS, and JavaScript for everyday arithmetic tasks with a clean interface.'
        },
        {
            title: 'Weather Web App',
            tech: 'React.js, OpenWeather API',
            description: 'A React-based weather dashboard that fetches real-time weather data from an Open API and displays current conditions for any city.'
        }
    ]

    return (
        <div className={`${shellClass} px-6 py-16`}>
            <div className='mx-auto max-w-6xl'>
                <div className='mb-10 text-center'>
                    <p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500'>Projects</p>
                    <h2 className='text-4xl font-bold'>My recent work</h2>
                </div>

                <div className='grid gap-8 md:grid-cols-2'>
                    {projectList.map((project) => (
                        <div key={project.title} className={`${cardClass} rounded-2xl p-6 shadow-lg`}>
                            <div className='mb-4 flex items-center justify-between'>
                                <h3 className='text-2xl font-semibold'>{project.title}</h3>
                                <span className='rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400'>{project.tech}</span>
                            </div>
                            <p className={`text-base leading-7 ${descriptionClass}`}>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
