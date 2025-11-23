import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, User } from 'lucide-react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full h-auto fixed top-0 left-0 bg-linear-to-r from-(--primary) to-(--primary-2)">
            <div className="w-full max-w-[62.5rem] left-0 right-0 mx-auto flex flex-row items-center place-content-between py-[0.5rem] px-[1rem]">
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
                    <Link className="hover:font-normal" href="/dashboard/main">Home</Link>
                    <Link className="hover:font-normal" href="/dashboard/main/nutrition">Store</Link>
                    <Link className="hover:font-normal" href="/dashboard/main/workout">Gallery</Link>
                    <Link className="hover:font-normal" href="/dashboard/main/workout">About Us</Link>
                    <Link className="hover:font-normal" href="/dashboard/main/workout">Contact</Link>
                </div>

                <div className="lg:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={38} /> : <Menu size={38} />}
                    </button>
                </div>

                {menuOpen && (
                    <div className="font-sans font-light absolute top-[4.5rem] left-0 w-full bg-black text-white px-4 py-2 flex flex-col gap-4 lg:hidden items-center text-[1.75rem]">
                        <Link className="hover:font-normal" href="/dashboard/main" onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link className="hover:font-normal" href="/dashboard/main/nutrition" onClick={() => setMenuOpen(false)}>Store</Link>
                        <Link className="hover:font-normal" href="/dashboard/main/workout" onClick={() => setMenuOpen(false)}>Gallery</Link>
                        <Link className="hover:font-normal" href="/dashboard/main/account-settings" onClick={() => setMenuOpen(false)}>About Us</Link>
                        <Link className="hover:font-normal" href="/dashboard/main/account-settings" onClick={() => setMenuOpen(false)}>Contact</Link>
                        <Link className="hover:font-normal" href="/dashboard/main/account-settings" onClick={() => setMenuOpen(false)}>Social</Link>
                    </div>
                )}
            </div>
        </nav>
    )
}


