import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { MdClose, MdMenu } from 'react-icons/md';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo_bg } from '../assets';

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const location = useLocation();

    const getContactLink = (link) => {
        if (link.id === '#contact') {
            return location.pathname === '/' ? '#contact' : '/#contact';
        }
        return link.id;
    };

    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-black/40 md:bg-transparent`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link to="/" className="flex items-center gap-2" onClick={() => { setActive(""); window.scrollTo(0, 0); }}>
                    <img src={logo_bg} alt="logo" className="h-10 object-contain border-0" />
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
                    {navLinks.map((link) => (
                        <li key={link.id} className={`${active === link.title ? "text-tertiary" : "text-white"} hover:text-tertiary text-[18px] font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
                            <a href={getContactLink(link)}>
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    {toggle ? (
                        <MdClose
                            className="w-[28px] h-[28px] cursor-pointer text-tertiary"
                            onClick={() => setToggle(!toggle)}
                        />
                    ) : (
                        <MdMenu
                            className="w-[28px] h-[28px] cursor-pointer text-tertiary"
                            onClick={() => setToggle(!toggle)}
                        />
                    )}
                    <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-[rgba(0,0,0,0.7)] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className="list-none flex justify-end items-start flex-col gap-4">
                            {navLinks.map((link) => (
                                <li key={link.id} className={`${active === link.title ? "text-tertiary" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`} onClick={() => { setToggle(!toggle); setActive(link.title); }}>
                                    <a href={getContactLink(link)}>
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar 