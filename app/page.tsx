import HeroBanner from "@/components/heroBanner";


export default function Home() {
  return (
    <main className="w-full mt-[4.1rem] font-sans">
      <HeroBanner />
      <div className="my-[2rem] w-full max-w-[75rem] px-[1rem] xl:px-0 justify-center items-center flex flex-col gap-[2rem] mx-auto">
        <div className="border rounded-xl overflow-hidden w-full h-[30rem] md:h-[25rem] flex flex-col-reverse max-w-[75rem] md:flex-row mx-auto">
          <div className="flex-1 flex flex-col relative items-center justify-center bg-linear-to-r from-(--primary) to-(--primary-2)">
            <h1 className="mt-[2rem] text-[2.225rem] font-bold px-[2rem] text-center">Elevate Your Space</h1>
            <p className="mt-[0.5rem] mb-[2rem] text-[1.125rem] leading-[1.5rem] font-light px-[2rem]">Look through our wide selection of home decorations. We offer paintings, ornaments and furniture. Improve the look and feel of your home for your next gathering.</p>
          </div>

          <img
            src="/images/feature-image-1.jpg"
            alt="home-interior"
            className="flex-1 w-full h-full object-cover"
          
          />
        </div>
        <div className="border rounded-xl overflow-hidden w-full h-[30rem] md:h-[25rem] flex flex-col-reverse md:flex-row-reverse mx-auto">
          <div className="flex-1 flex flex-col relative items-center justify-center bg-linear-to-r from-(--primary) to-(--primary-2)">
            <h1 className="mt-[2rem] text-[2.225rem] font-bold px-[2rem] text-center">Built To Fit Your Home</h1>
            <p className="mt-[0.5rem] mb-[2rem] leading-[1.5rem] text-[1.125rem] font-light px-[2rem]">Using high quality materials. Soni Gallery aims to build beautiful custom furniture to our customers specifications. </p>
          </div>

          <img
            src="/images/feature-image-2.jpg"
            alt="home-interior"
            className="flex-1 h-full w-full object-cover"

          />
        </div>
        <div className="border rounded-xl overflow-hidden w-full h-[30rem] md:h-[25rem] flex flex-col-reverse max-w-[75rem] md:flex-row mx-auto">
          <div className="flex-1 flex flex-col relative items-center justify-center bg-linear-to-r from-(--primary) to-(--primary-2)">
            <h1 className="mt-[2rem] text-[2.225rem] font-bold px-[2rem] text-center">Check Out Our New Store</h1>
            <p className="mt-[0.5rem] mb-[2rem] text-[1.125rem] leading-[1.5rem] font-light px-[2rem]">Come meet the people behind Soni Gallery. Our commitment to customer service and quality products is what separates us from the the rest.</p>
          </div>

          <img
            src="/images/hero-banner-3.png"
            alt="home-interior"
            className="flex-1 w-full h-full object-cover"
          
          />
        </div>
      </div>
    </main>
  );
}
