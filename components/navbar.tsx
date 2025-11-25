import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, User } from 'lucide-react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="w-full h-auto fixed top-0 left-0 bg-linear-to-r from-(--primary) to-(--primary-2) z-1000">
                <div className="w-full max-w-[75rem] left-0 right-0 mx-auto flex flex-row items-center place-content-between py-[0.5rem] px-[2rem]">
                    <div className="flex flex-row gap-2">
                        <img
                            className="rounded border"
                            src='/images/Soni-Gallery-Logo.jpg'
                            alt="Logo"
                            width={50}
                            height="auto"
                        />
                        <h1 className="font-mono text-[1.875rem]">Soni Gallery</h1>
                    </div>

                    <div className="font-sans hidden lg:flex flex-row items-center space-evenly text-[1.875rem] font-light gap-[2rem] pt-[0.5rem]">
                        <Link className="hover:font-normal" href="/">Home</Link>
                        <Link className="hover:font-normal" href="/dashboard/main/nutrition">Store</Link>
                        <Link className="hover:font-normal" href="/dashboard/main/workout">Gallery</Link>
                        <Link className="hover:font-normal" href="/dashboard/main/workout">About Us</Link>
                        <Link className="hover:font-normal" href="/dashboard/main/workout">Contact</Link>
                    </div>

                    <div className="lg:hidden">
                        <button className="cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <X size={38} /> : <Menu size={38} />}
                        </button>
                    </div>
                </div>
            </nav>
            <div
                    className={`
                        font-sans font-light lg:hidden w-full bg-black text-white px-4 py-2
                        flex flex-col gap-4 items-center text-[1.75rem]
                        overflow-hidden transition-all duration-300 fixed left-0
                        ${menuOpen ? "max-h-96 opacity-100 top-[4rem]" : "max-h-0 opacity-0 top-[4.5rem]"}
                        z-40
                    `}
                >
                    <Link onClick={() => setMenuOpen(false)} href="/dashboard/main" className="hover:text-(--primary)">Home</Link>
                    <Link onClick={() => setMenuOpen(false)} href="/dashboard/main/nutrition" className="hover:text-(--primary)">Store</Link>
                    <Link onClick={() => setMenuOpen(false)} href="/dashboard/main/workout" className="hover:text-(--primary)">Gallery</Link>
                    <Link onClick={() => setMenuOpen(false)} href="/dashboard/main/account-settings" className="hover:text-(--primary)">About Us</Link>
                    <Link onClick={() => setMenuOpen(false)} href="/dashboard/main/account-settings" className="hover:text-(--primary)">Contact</Link>
                    <Link onClick={() => setMenuOpen(false)} href="/dashboard/main/account-settings" className="hover:text-(--primary)">Social</Link>
                </div>
            </>
    )
}


