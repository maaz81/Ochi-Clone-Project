import React from "react";

const Footer = () => {
  return (
    <footer className="font-body px-6 md:px-20 py-10 w-full bg-zinc-900 text-white">
      {/* Top row */}
      <div className="flex flex-col md:flex-row justify-between text-xs opacity-50">
        <div>
          © {new Date().getFullYear()} · Student Practice Project (Non-Commercial)
          <span className="block mt-1">
            Design credits:{" "}
            <a
              href="https://ochi.design"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              ochi.design
            </a>
          </span>
        </div>

        <div className="font-heading mt-3 md:mt-0">
          Built by <span className="underline">Maaz Ahmad Khan</span>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-6 text-xs opacity-40 max-w-md">
        <p>
          This is a student-made, non-commercial practice project created for
          learning purposes. The original design and concept belong to
          ochi.design. This project is not affiliated with, sponsored by, or
          endorsed by the original creators.
        </p>
      </div>
    </footer>
  );
};

export default Footer;