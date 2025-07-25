import { useState } from 'react';
import Logo from "../assets/Doyenify_Logo-removebg-preview.png"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <>
            {/* Navbar */}
            <nav className="flex justify-around p-6 text-white  w-full relative">
                <img src={Logo} className="w-32 h-8" alt="Doyenify"></img>
                <div className="flex justify-center">
                    <ul className=" md:flex gap-8 text-white justify-center">
                        <li>Our Work</li>
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>Our Team</li>
                    </ul>
                    <button className="bg-[var(--primaryGreen)] text-black font-bold px-8 rounded-full">Contact Us</button>
                </div>            

                {/* Hamburger Icon */}
                <div className="flex flex-col gap-1 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                    <div className="w-6 h-1 bg-white"></div>
                    <div className="w-6 h-1 bg-white"></div>
                    <div className="w-6 h-1 bg-white"></div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-4 py-6 md:hidden z-50">
                    <ul className="flex flex-col gap-4 text-white">
                        <li>Our Work</li>
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>Our Team</li>
                    </ul>
                    <button className="bg-red-500 text-white font-bold px-8 py-2 rounded-full">
                        Contact Us
                    </button>
                    </div>
                )}

            </nav>
        </>
    )
}