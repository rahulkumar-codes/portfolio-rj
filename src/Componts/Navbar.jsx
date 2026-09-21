import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ darkMode, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navCss = darkMode
        ? 'mx-4 sticky top-3 left-0 rounded overflow-hidden shadow-lg shadow-slate-950/40 bg-gray-900 text-white'
        : 'mx-4 sticky top-3 left-0 rounded overflow-hidden shadow-md border border-slate-200 bg-white text-slate-800'
    const linkCss = darkMode ? 'hover:text-gray-300' : 'hover:text-slate-600'
    const activeLink = darkMode ? 'text-blue-400' : 'text-blue-600'
    const toggleButton = darkMode
        ? 'bg-slate-100 text-slate-900 hover:bg-white'
        : 'bg-slate-900 text-white hover:bg-slate-700'
    const mobileMenuCss = darkMode
        ? 'bg-gray-900 text-white border-t border-slate-700'
        : 'bg-white text-slate-800 border-t border-slate-200'

    const ThemeIcon = () => (
        darkMode ? (
            <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' className='h-4 w-4' aria-hidden='true'>
                <circle cx='12' cy='12' r='4' />
                <path d='M12 2.5v2.2M12 19.3v2.2M4.93 4.93l1.56 1.56M17.51 17.51l1.56 1.56M2.5 12h2.2M19.3 12h2.2M4.93 19.07l1.56-1.56M17.51 6.49l1.56-1.56' strokeLinecap='round' />
            </svg>
        ) : (
            <svg viewBox='0 0 24 24' fill='currentColor' className='h-4 w-4' aria-hidden='true'>
                <path d='M21 12.8A8.9 8.9 0 0 1 11.2 3a9 9 0 1 0 9.8 9.8Z' />
            </svg>
        )
    )

    return (
        <div className={`${navCss} z-50`}>
            <div className='flex h-14 items-center justify-between px-4'>
                <div className='text-xl font-semibold sm:text-2xl cursor-default'>Rahul Codes</div>

                <div className='hidden items-center gap-5 text-lg font-semibold md:flex'>
                    <NavLink className={({ isActive }) => (isActive ? activeLink : linkCss)} to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? activeLink : linkCss)} to='/skills'>Skills</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? activeLink : linkCss)} to='/projects'>Projects</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? activeLink : linkCss)} to='/contact'>Contact</NavLink>
                </div>

                <div className='flex items-center gap-2'>
                    <button
                        type='button'
                        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                        title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                        onClick={toggleTheme}
                        className={`hidden h-9 w-9 rounded-full p-2 transition-colors md:inline-flex md:items-center md:justify-center ${toggleButton}`}
                    >
                        <ThemeIcon />
                    </button>

                    <button
                        type='button'
                        aria-label='Toggle menu'
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className='inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-500/30 md:hidden'
                    >
                        <span className='space-y-1.5'>
                            <span className='block h-0.5 w-5 bg-current'></span>
                            <span className='block h-0.5 w-5 bg-current'></span>
                            <span className='block h-0.5 w-5 bg-current'></span>
                        </span>
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className={`md:hidden ${mobileMenuCss}`}>
                    <div className='flex flex-col gap-3 px-4 py-4 text-base font-semibold'>
                        <NavLink onClick={() => setIsMenuOpen(false)} className={({ isActive }) => (isActive ? activeLink : linkCss)} to='/'>Home</NavLink>
                        <NavLink onClick={() => setIsMenuOpen(false)} className={({ isActive }) => (isActive ? activeLink : linkCss)} to='/skills'>Skills</NavLink>
                        <NavLink onClick={() => setIsMenuOpen(false)} className={({ isActive }) => (isActive ? activeLink : linkCss)} to='/projects'>Projects</NavLink>
                        <NavLink onClick={() => setIsMenuOpen(false)} className={({ isActive }) => (isActive ? activeLink : linkCss)} to='/contact'>Contact</NavLink>
                        <button
                            type='button'
                            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                            onClick={() => {
                                toggleTheme()
                                setIsMenuOpen(false)
                            }}
                            className={`inline-flex h-10 w-10 items-center justify-center rounded-full p-2 transition-colors ${toggleButton}`}
                        >
                            <ThemeIcon />
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar
