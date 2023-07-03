/* Install react-router-dom, react-scripts, react-dom, tailwind, awesomeIconsLink to index.html*/
import { useState } from 'react';
import { navbarData } from '../assets/utilities/navbarData';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png'

export default function Navbar() {
    const [toggle, setToggle] = useState(false);

    const showNav = () => {
        setToggle(!toggle);
    };

    // start mobile first plus facile
    return (
        <nav className='fixed top-0 text-xl w-full bg-black items-center flex p-7 z-20 font-oswald'>
        <div className='flex justify-between items-center w-full flex-wrap minlg:flex-nowrap'>
            <a href='/'>
                <img className='cursor-pointer' src={logo} alt='logo' />
            </a>

            <button
            className='flex justify-end minlg:hidden ring-1 ring-white rounded'
            onClick={showNav}
            >
            <i className='fas fa-bars text-orange-500 w-9 h-9 flex justify-center items-center hover:text-orange-500'></i>
            </button>

            <ul
            className={`${
                toggle ? ' flex' : ' hidden'
            } flex-col justify-center gap-6 items-center w-full first:mt-2 minlg:flex-row minlg:w-auto minlg:space-x-10 minlg:flex`}
            >
            {navbarData.map((link, index) => {
                return (
                <li key={index} className={link.cname}>
                    <Link
                    className='text-white hover:text-orange-500'
                    to={link.href}
                    onClick={showNav}
                    >
                    {link.title}
                    </Link>
                </li>
                );
            })}
            </ul>
            <button
            className={`${
                toggle ? ' flex' : ' hidden'
            } text-white hover:bg-orange-400 mx-auto minlg:mx-0 minlg:flex minlg:mt-0 items-center justify-center font-medium bg-orange-500 px-1 p-2 rounded-lg mt-4 w-24`}
            >
            Login
            </button>
        </div>
        </nav>
    );
}
