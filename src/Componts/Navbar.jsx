import { Link, NavLink, useLocation } from 'react-router-dom'



const Navbar = () => {
    const navCss='flex w-auto sticky top-3 left-0 h-14 bg-gray-900 text-white justify-between items-center px-4 rounded overflow-hidden';
    const linkCss = 'hover:text-gray-400';
    const activeLink = 'text-blue-600';
    return (
        <div className={navCss}>
            <div className="text-2xl font-semibold">Rahul</div>
            <div className="flex gap-5 text-lg font-semibold">
                <NavLink className={({isActive})=> isActive ? activeLink : linkCss } to='/'>Home</NavLink>
                <NavLink className={({isActive})=> isActive ? activeLink : linkCss } to='/services'>Services</NavLink>
                <NavLink className={ ({isActive})=> isActive ? activeLink : linkCss } to='/products'>Products</NavLink>
                <NavLink className={ ({isActive})=> isActive ? activeLink : linkCss } to='/contact'>Contact</NavLink>
            </div>
            <div className="flex gap-2">
                <button className='bg-blue-600 font-medium rounded px-2 py-1 cursor-pointer hover:bg-blue-800 whitespace-nowrap'>Get Started</button>

            </div>
        </div>
    )
}

export default Navbar
