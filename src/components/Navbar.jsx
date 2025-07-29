import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';
import { navLinks } from '../constants';
import { logo_bg } from '../assets';

const Navbar = () => {
    const [active, setActive] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setScrolled(scrollPosition > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const handleNavClick = (link) => {
        setActive(link.title);
        setIsOpen(false);
    };

    return (
        <>
            <motion.nav 
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled 
                        ? 'bg-primary-900/95 backdrop-blur-md border-b border-white/10' 
                        : 'bg-transparent'
                }`}
            >
                <div className="container-custom">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <Link 
                            to="/" 
                            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
                            onClick={() => { 
                                setActive(""); 
                                window.scrollTo(0, 0); 
                            }}
                        >
                            <img 
                                src={logo_bg} 
                                alt="Jasha Consulting Services" 
                                className="h-8 lg:h-10 object-contain" 
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <motion.div
                                    key={link.id}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        to={link.id}
                                        onClick={() => handleNavClick(link)}
                                        className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 focus-ring ${
                                            active === link.title || location.pathname === link.id
                                                ? 'text-secondary-400' 
                                                : 'text-white hover:text-secondary-300'
                                        }`}
                                    >
                                        {link.title}
                                        {(active === link.title || location.pathname === link.id) && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary-400"
                                                initial={false}
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors focus-ring"
                            aria-label="Toggle mobile menu"
                        >
                            <AnimatePresence mode="wait">
                                {isOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <HiX className="w-6 h-6 text-white" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <HiMenu className="w-6 h-6 text-white" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
                            onClick={() => setIsOpen(false)}
                        />
                        
                        {/* Menu Panel */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="fixed top-16 left-0 right-0 bg-primary-900/95 backdrop-blur-md border-b border-white/10 z-50 lg:hidden"
                        >
                            <div className="container-custom py-6">
                                <div className="space-y-2">
                                    {navLinks.map((link, index) => (
                                        <motion.div
                                            key={link.id}
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            exit={{ x: -20, opacity: 0 }}
                                            transition={{ duration: 0.2, delay: index * 0.1 }}
                                        >
                                            <Link
                                                to={link.id}
                                                onClick={() => handleNavClick(link)}
                                                className={`block w-full text-left px-6 py-4 rounded-xl transition-all duration-200 focus-ring text-lg font-medium ${
                                                    active === link.title || location.pathname === link.id
                                                        ? 'bg-secondary-600/20 text-secondary-400 border border-secondary-500/30' 
                                                        : 'text-white hover:bg-white/10 hover:border border-white/20'
                                                }`}
                                            >
                                                {link.title}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar 