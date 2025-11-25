'use client';

import Link from 'next/link';
import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";

export default function HeroBanner() {

    const [emblaRef, embla] = useEmblaCarousel(
        {loop: true},
        [Fade()]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);

    const slides = [
        {
            src: "/images/hero-banner-1.jpg",
            title: "Welcome to Soni Gallery",
            description: "Let us elevate your home space with our delightful products.",
            buttonText: "Explore",
            buttonLink: "/page1",
        },
        {
            src: "/images/hero-banner-2.jpg",
            title: "Custom Furniture Built To Fit Your Specifications",
            description: "Contact us for custom furniture, we build it from scratch using quality materials.",
            buttonText: "Contact",
            buttonLink: "/page2",
        },
        {
            src: "/images/hero-banner-3.png",
            title: "Coming Soon",
            description: "We are opening a new store in Bixby, Oklahoma.",
            buttonText: "Location",
            buttonLink: "/page3",
        },
        
    ];

    const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);
    const scrollTo = useCallback((index: number) => embla?.scrollTo(index), [embla] );


    const onSelect = useCallback(() => {
        if (!embla) return;
        setSelectedIndex(embla.selectedScrollSnap());
    }, [embla]);

    useEffect(() => {
        if (!embla) return;
        embla.on("select", onSelect);
        onSelect();
    }, [embla, onSelect]);


    return(
        <>
            <div className="relative w-full h-[50rem] overflow-hidden font-sans">


                <div className="embla w-full h-full" ref={emblaRef}>
                    <div className="flex h-full">
                        {slides.map((slide, index) => (
                            <div
                                className="flex-shrink-0 w-full h-full relative"
                                key={index}
                            >
                                <img
                                    src={slide.src}
                                    alt={slide.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40"></div>
                                <div className="absolute left-1/2 -translate-x-1/2 bottom-[15rem] text-white max-w-lg flex flex-col">
                                    <h2 className="text-[2.225rem] font-bold">{slide.title}</h2>
                                    <p className="text-center text-[1.125rem] py-[0.5rem] font-semibold">{slide.description}</p>
                                    <div className="flex justify-center">
                                        <Link
                                        href={slide.buttonLink}
                                        className="mt-[0.5rem] text-[1.125rem] font-light px-[1rem] py-[0.5rem] border border-black rounded-full bg-linear-to-r from-(--secondary) to-(--secondary-2) hover:border hover:font-normal hover:border-white"
                                    >
                                        {slide.buttonText}
                                    </Link>
                                    </div>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="hidden md:flex">
                    <button
                        onClick={scrollPrev}
                        className="absolute top-1/2 left-[2rem] transform text-black rounded-full z-10 group cursor-pointer border"
                    >
                        <svg className="text-white hover:text-black" width="45" height="45" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="25" r="25" fill="white" />
                            <line x1="18" y1="25" x2="32" y2="25" stroke="currentColor" strokeWidth="2" />
                            <path d="M16.2929 24.2929C15.9024 24.6834 15.9024 25.3166 16.2929 25.7071L22.6569 32.0711C23.0474 32.4616 23.6805 32.4616 24.0711 32.0711C24.4616 31.6805 24.4616 31.0474 24.0711 30.6569L18.4142 25L24.0711 19.3431C24.4616 18.9526 24.4616 18.3195 24.0711 17.9289C23.6805 17.5384 23.0474 17.5384 22.6569 17.9289L16.2929 24.2929ZM18 25V24H17V25V26H18V25Z" fill="black" />
                        </svg>
                    </button>
                    <button
                        onClick={scrollNext}
                        className="absolute top-1/2 right-[2rem] transform text-black rounded-full z-10 group cursor-pointer border"
                    >
                        <svg className="text-white transition-colors duration-400 group-hover:text-black" width="45" height="45" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="25" r="25" fill="white" />
                            <line className='transition-colors duration-300' x1="18" y1="24" x2="32" y2="24" stroke="currentColor" stroke-width="2" />
                            <path d="M33.7071 24.7071C34.0976 24.3166 34.0976 23.6834 33.7071 23.2929L27.3431 16.9289C26.9526 16.5384 26.3195 16.5384 25.9289 16.9289C25.5384 17.3195 25.5384 17.9526 25.9289 18.3431L31.5858 24L25.9289 29.6569C25.5384 30.0474 25.5384 30.6805 25.9289 31.0711C26.3195 31.4616 26.9526 31.4616 27.3431 31.0711L33.7071 24.7071ZM32 24V25H33V24V23H32V24Z" fill="black" />

                        </svg>
                    </button>
                </div>
                

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={`w-3 h-3 rounded-full border-2 ${index === selectedIndex ? "bg-white" : "bg-gray-400"
                                }`}
                        />
                    ))}
                </div>



            </div>
        </>
    )



}