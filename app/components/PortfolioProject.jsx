import { useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const PortfolioProject = () => {
    const [isBtnHovered, setIsBtnHovered] = useState(false);
    const [isMailHovered, setIsMailHovered] = useState(false);

    return (
        <section className="bg-[#CDEA68] w-full min-h-screen flex flex-col justify-center items-center uppercase text-black">
            {/* Heading */}
            <div className="font-heading flex flex-col items-center text-[72px] sm:text-[100px] lg:text-[130px] tracking-tight font-extrabold leading-none text-center">
                <h1>Ready to see</h1>
                <h1>The Project</h1>
                <h1>& Portfolio ?</h1>
            </div>

            {/* Portfolio Button */}
            <a
                href="https://maaz-portfolio-xi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button
                    onMouseEnter={() => setIsBtnHovered(true)}
                    onMouseLeave={() => setIsBtnHovered(false)}
                    onFocus={() => setIsBtnHovered(true)}
                    onBlur={() => setIsBtnHovered(false)}
                    className="px-6 py-3 max-w-fit bg-zinc-900 mt-6 flex items-center justify-between rounded-full text-white transition-all uppercase"
                >
                    See Portfolio
                    <div
                        className={`flex justify-center items-center rounded-full overflow-hidden ml-5
      transition-all duration-300
      ${isBtnHovered ? "w-6 h-6 bg-white" : "w-2 h-2 bg-black"}`}
                    >
                        <span
                            className={`rotate-[45deg] transition-all duration-200
        ${isBtnHovered ? "opacity-100 scale-100 text-black" : "opacity-0 scale-0"}`}
                        >
                            <FaArrowUpLong />
                        </span>
                    </div>
                </button>
            </a>

            {/* Divider */}
            <span className="my-4 font-body text-sm opacity-60">OR</span>

            {/* Email */}
            <a
                href="mailto:maazahmadkhan7@gmail.com"
                onMouseEnter={() => setIsMailHovered(true)}
                onMouseLeave={() => setIsMailHovered(false)}
                className="flex items-center gap-3 rounded-full border border-black px-4 py-2 font-body text-sm lowercase hover:bg-black hover:text-white transition-all"
            >
                maazahmadkhan7@gmail.com
                <div
                    className={`flex justify-center items-center rounded-full overflow-hidden ml-3
  transition-all duration-300
  ${isMailHovered ? "w-6 h-6 bg-white" : "w-2 h-2 bg-black"}`}
                >
                    <span
                        className={`rotate-[45deg] transition-all duration-200
    ${isMailHovered ? "opacity-100 scale-100 text-black" : "opacity-0 scale-0"}`}
                    >
                        <FaArrowUpLong />
                    </span>
                </div>
            </a>

            <p className="mt-10 text-[14px] font-body opacity-70 normal-case text-center">
                Practice project · Non-commercial · Design credit: ochi.design
            </p>
        </section>
    );
};

export default PortfolioProject;