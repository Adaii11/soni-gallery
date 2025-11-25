import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="font-sans text-white flex items-center justify-center h-screen relative">
        <img 
            className="w-full h-full object-cover"
            src="/images/hero-banner-1.jpg"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute flex flex-col">
            <h1 className="font-bold text-[2.225rem] text-center">404</h1>
            <h2 className="font-light text-[1.875rem] text-center">Page Not Fount</h2>
            <div className="flex justify-center py-[1rem]">
                <Link className="border border-black text-[1.125rem] font-light px-[1rem] py-[0.5rem] rounded-full bg-linear-to-r from-(--secondary) to-(--secondary-2) hover:border hover:font-normal hover:border-white" href="/">Home</Link>
            </div>
            
        </div>
    </div>
  );
}