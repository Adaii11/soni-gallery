import Link from 'next/link';
import {useState} from 'react';

export default function Footer() {
    return (
        <div className="w-full bg-black text-(--background) flex flex-col font-sans">        
            <div className="w-full max-w-[62.5rem] left-0 right-0 mx-auto pt-[4.5rem] h-auto flex flex-col md:flex-row md:gap-[1rem]"> 
                <div className="flex-1 flex-col py-[2.25rem]">
                    <div className="flex flex-row gap-[1rem] items-center justify-center">
                        <img
                            className="rounded border align-middle"
                            src='/images/Soni-Gallery-Logo.jpg'
                            alt="logo"
                            width={50}
                            height="auto"
                        />
                        <h1 className="font-mono text-[1.75rem] font-bold">Soni Gallery</h1>
                    </div>  
                    <p className="text-[1.125rem] font-sans font-light max-w-[16rem] pt-[1rem] px-[0.5rem] mx-auto">Soni Gallery was founded In Tulsa, OK. Our business is to focus on interior design by providing home decor and furniture. We take great pride in our work and are fully invested to improve the comfort and feel of your beautiful home.</p>
                    <div className="flex flex-row items-center justify-center mt-[2rem]">
                        <img
                            
                            src='/svg/call_end.svg'
                            alt="logo"
                            width={35}
                            className="align-middle"                            
                        />
                        <h1 className="font-bold text-[1.75rem] pt-[0.25rem] pr-[0.5rem] leading-none">Call Us</h1>
                    </div>
                    <p className="mt-[0.5rem] text-center">+1 (918) 999-9999</p>
                </div>
                <div className="flex-1 flex-col md:py-[2.25rem]">

                    <div className="flex flex-row items-center justify-center">
                        <img
                            
                            src='/svg/schedule.svg'
                            alt="logo"
                            width={30}
                            className="align-middle"
                            
                        />
                        <h1 className="font-bold text-[1.75rem] pt-[0.25rem] px-[0.5rem] leading-none">Business Hours</h1>
                    </div>
                    <p className="mt-[0.5rem] text-center">Monday - Friday | 8:00am - 7:00pm<br/>Saturday - Sunday | 8:00am - 5:00pm</p>

                    <div className="flex flex-row items-center justify-center mt-[2rem]">
                        <img
                            src='/svg/location.svg'
                            alt="logo"
                            width={20}
                            className="align-middle"                            
                        />
                        <h1 className="font-bold text-[1.75rem] pt-[0.25rem] px-[0.5rem] leading-none">Location</h1>
                    </div>
                    <a
                        href="https://maps.google.com/?q=7454+S+Olympia+Ave,+Tulsa,+OK+74132"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-[0.5rem] text-center block hover:underline"
                        >
                        7454 S Olympia Ave, Tulsa, OK 74132
                    </a>
                    <div className="mt-4 w-full">
                        <iframe
                            src="https://www.google.com/maps?q=7454+S+Olympia+Ave,+Tulsa,+OK+74132&output=embed"
                            className="max-w-full left-0 right-0 mx-auto h-[250px] border rounded-[1rem]"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    
                </div>
                <div className="flex flex-1 flex-col py-[2.25rem]  gap-[0.5rem]">
                    <div className="flex flex-row items-center justify-center">
                        <img
                            
                            src='/svg/link.svg'
                            alt="logo"
                            width={40}
                            className="align-middle"                            
                        />
                        <h1 className="font-bold text-[1.75rem] pt-[0.25rem] pr-[0.5rem] leading-none">Quick Links</h1>
                    </div>
                    <Link className="text-center text-[1.375rem] font-light hover:font-normal" href="/dashboard/main">Home</Link>
                    <Link className="text-center text-[1.375rem] font-light hover:font-normal" href="/dashboard/main/nutrition">Store</Link>
                    <Link className="text-center text-[1.375rem] font-light hover:font-normal" href="/dashboard/main/workout">Gallery</Link>
                    <Link className="text-center text-[1.375rem] font-light hover:font-normal" href="/dashboard/main/workout">About Us</Link>
                    <Link className="text-center text-[1.375rem] font-light hover:font-normal" href="/dashboard/main/workout">Contact</Link>
                    <h1 className="font-bold text-[1.75rem] text-center mt-[2rem]">Social</h1>
                    <div className="flex flex-row justify-center gap-[1rem] mt-[0.5rem]">
                        <a href="https://maps.google.com/?q=7454+S+Olympia+Ave,+Tulsa,+OK+74132">
                            <img
                                src='/svg/facebook.svg'
                                alt="logo"
                                width={30}
                                className="align-middle"                            
                            />
                        </a>
                        <a href="https://maps.google.com/?q=7454+S+Olympia+Ave,+Tulsa,+OK+74132">
                            <img
                                src='/svg/instagram.svg'
                                alt="logo"
                                width={30}
                                className="align-middle"                            
                            />
                        </a>
                        <a href="https://maps.google.com/?q=7454+S+Olympia+Ave,+Tulsa,+OK+74132">
                            <img
                                src='/svg/tiktok.svg'
                                alt="logo"
                                width={30}
                                className="align-middle"                            
                            />
                        </a>
                    </div>                            
                </div>
            </div>
            <div className="text-center border-t py-[0.5rem]">
                2025 © Soni Gallery | Designed by ARC 
            </div>
        </div>
    )
}