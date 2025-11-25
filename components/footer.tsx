import Link from 'next/link';
import {useState} from 'react';

export default function Footer() {
    return (
        <div className="w-full bg-black text-(--background) flex flex-col font-sans border-t border-(--secondary)">        
            <div className="w-full max-w-[75rem] left-0 right-0 mx-auto h-auto flex flex-col md:flex-row md:gap-[1rem]"> 
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
                    <p className="leading-[1.75rem] text-[1.125rem] font-sans font-light max-w-[16rem] pt-[1rem] px-[0.5rem] mx-auto">Soni Gallery was founded In Tulsa, OK. Our business is to focus on interior design by providing home decor and furniture. We take great pride in our work and are fully invested to improve the comfort and feel of your beautiful home.</p>
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
                    <p className="leading-[1.75rem] mt-[0.5rem] text-center">Monday - Friday | 8:00am - 7:00pm<br/>Saturday - Sunday | 8:00am - 5:00pm</p>

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
                        className="mt-[0.5rem] text-center block hover:text-(--primary) "
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
                    <Link className="text-center text-[1.375rem] font-light hover:font-normal hover:text-(--primary)" href="/">Home</Link>
                    <Link className="text-center text-[1.375rem] font-light hover:font-normal hover:text-(--primary) " href="/dashboard/main/nutrition">Store</Link>
                    <Link className="text-center text-[1.375rem] font-light hover:font-normal hover:text-(--primary) " href="/dashboard/main/workout">Gallery</Link>
                    <Link className="text-center text-[1.375rem] font-light hover:font-normal hover:text-(--primary) " href="/dashboard/main/workout">About Us</Link>
                    <Link className="text-center text-[1.375rem] font-light hover:font-normal hover:text-(--primary) " href="/dashboard/main/workout">Contact</Link>
                    <Link className="text-center text-[1.375rem] font-light hover:font-normal hover:text-(--primary) " href="/dashboard/main/workout">FAQ</Link>
                    <Link className="text-center text-[1.375rem] font-light hover:font-normal hover:text-(--primary) " href="/dashboard/main/workout">Returns</Link>
                    <h1 className="font-bold text-[1.75rem] text-center mt-[2rem]">Social</h1>
                    <div className="flex flex-row justify-center gap-[1rem] mt-[0.5rem]">
                        <a href="https://maps.google.com/?q=7454+S+Olympia+Ave,+Tulsa,+OK+74132">
                            <svg className="w-[2rem] h-auto text-white hover:text-(--primary)  transition-colors duration-200" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_4522_5)">
                                <path d="M24 0C10.7453 0 0 10.7453 0 24C0 35.255 7.74912 44.6995 18.2026 47.2934V31.3344H13.2538V24H18.2026V20.8397C18.2026 12.671 21.8995 8.8848 29.9194 8.8848C31.44 8.8848 34.0637 9.18336 35.137 9.48096V16.129C34.5706 16.0694 33.5866 16.0397 32.3645 16.0397C28.4294 16.0397 26.9088 17.5306 26.9088 21.4061V24H34.7482L33.4013 31.3344H26.9088V47.8243C38.7926 46.3891 48.001 36.2707 48.001 24C48 10.7453 37.2547 0 24 0Z" fill="currentColor"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_4522_5">
                                <rect width="48" height="48" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a href="https://maps.google.com/?q=7454+S+Olympia+Ave,+Tulsa,+OK+74132">
                            <svg className="w-[2rem] h-auto text-white hover:text-(--primary)  transition-colors duration-200" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_4522_8)">
                                <path d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70313 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3313 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2813 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z" fill="currentColor"/>
                                <path d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z" fill="currentColor"/>
                                <path d="M39.6937 11.1843C39.6937 12.778 38.4 14.0624 36.8156 14.0624C35.2219 14.0624 33.9375 12.7687 33.9375 11.1843C33.9375 9.59053 35.2313 8.30615 36.8156 8.30615C38.4 8.30615 39.6937 9.5999 39.6937 11.1843Z" fill="currentColor"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_4522_8">
                                <rect width="48" height="48" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a href="https://maps.google.com/?q=7454+S+Olympia+Ave,+Tulsa,+OK+74132">
                            <svg className="w-[2rem] h-auto text-white hover:text-(--primary) transition-colors duration-200" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M34.1451 0H26.0556V32.6956C26.0556 36.5913 22.9444 39.7913 19.0725 39.7913C15.2007 39.7913 12.0894 36.5913 12.0894 32.6956C12.0894 28.8696 15.1315 25.7391 18.8651 25.6V17.3913C10.6374 17.5304 4 24.2783 4 32.6956C4 41.1827 10.7757 48 19.1417 48C27.5075 48 34.2833 41.1131 34.2833 32.6956V15.9304C37.3255 18.1565 41.059 19.4783 45 19.5479V11.3391C38.9157 11.1304 34.1451 6.12173 34.1451 0Z" fill="currentColor"/>
                            </svg>
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










