'use client';



export default function Contact() {
    return (
        <div className="font-sans mt-[4.4rem] w-full">
            <h1 className="text-[2.25rem] text-center font-bold py-[2rem]">Contact Us</h1>
            <div className="w-full max-w-[75rem] px-[1rem] py-[2rem] xl:px-0 justify-center items-center flex flex-col gap-[2rem] mx-auto">
                <div className="w-full h-[30rem] md:h-[25rem] flex flex-col-reverse max-w-[75rem] md:flex-row mx-auto">
                    <div className="flex-1 flex flex-col relative ">
                        <h1 className="mt-[2rem] text-[2.225rem] font-bold px-[2rem]">Soni Gallery</h1>
                        <hr className="mt-[0.5rem] mr-[2rem]" />
                        <div className="mt-[0.5rem] flex flex-col pl-[1rem]">
                            <h3 className="text-[1.75rem] font-regular">Business Hours</h3>
                            <p className="text-[1.125rem] font-light">Monday - Friday | 8:00am - 7:00pm</p>
                            <p className="text-[1.125rem] font-light">Saturday - Sunday | 8:00am - 3:00pm</p>
                            <h3 className="mt-[1rem] text-[1.75rem] font-regular">Address</h3>
                            <a
                                href="https://maps.google.com/?q=7454+S+Olympia+Ave,+Tulsa,+OK+74132"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-[0.5rem] block hover:text-(--secondary-2) "
                            >
                                7454 S Olympia Ave, Tulsa, OK 74132
                            </a>
                            <h3 className="mt-[1rem] text-[1.75rem] font-regular">Phone Number</h3>
                            <p className="text-[1.125rem] font-light">+1 (918) 999 - 9999</p>
                        </div>
                    </div>

                    <img
                        src="/images/hero-banner-3.png"
                        alt="home-interior"
                        className="flex-1 w-full h-full object-cover border rounded-xl"

                    />
                </div>
            </div>
            <form className="w-full max-w-[75rem] flex flex-col mx-auto px-[2rem] py-[4rem] rounded-xl gap-[1.5rem] bg-black">
                <h1 className="text-white text-[2.25rem] font-bold text-center">Send A Message</h1>
                <div className="w-full flex flex-col md:flex-row gap-[1rem]">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="flex-1 px-[1rem] py-[0.75rem] border rounded bg-white"
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="flex-1 px-[1rem] py-[0.75rem] border rounded bg-white"
                    />
                </div>
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-[1rem] py-[0.75rem] border rounded bg-white"
                />
                <input
                    type="number"
                    name="number"
                    placeholder="number (optional)"
                    className="w-full px-[1rem] py-[0.75rem] border rounded bg-white"
                />
                <select
                    name="reason"
                    className="w-full px-[1rem] py-[0.75rem] border rounded bg-white"
                >
                    <option value="">Please Select Below...</option>
                    <option value="product">Product Availability</option>
                    <option value="customQuote">Custom Furniture Quote</option>
                    <option value="support">Support</option>
                </select>
                <textarea
                    name="message"
                    placeholder="Tell us more..."
                    className="w-full px-[1rem] py-[0.75rem] border rounded min-h-[150px] bg-white"
                />
                <div className="w-full flex justify-end">
                    <button
                        type="submit"
                        className="border text-white px-[2rem] py-[0.75rem] rounded transition-colors duration-700 hover:bg-linear-to-r from-(--secondary) to-(--secondary-2)"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    )
}