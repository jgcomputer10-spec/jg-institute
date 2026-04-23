"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Course", path: "/course" },
    { name: "Verification", path: "https://bnmiindia.com/page.php?page=atcVerification" },
    { name: "Certificate", path: "https://bnmiindia.com/page.php?page=Certifications" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* GRADIENT BACKGROUND ONLY (NO WHITE OVERLAY) */}
      <div
        className={`gradient-bg transition-all duration-300 ${
          scrolled ? "py-3 shadow-2xl" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-white font-semibold text-xl">
              Janasanjog
            </span>
          </div>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-10 text-white text-lg font-medium">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.path} className="relative group">
                {link.name}

                {/* UNDERLINE */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-300 transition-all duration-300
                  ${
                    pathname === link.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* LOGIN */}
          <div className="hidden md:block">
            <Link href="/login">
              <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 hover:text-black transition">
                Login
              </button>
            </Link>
          </div>

          {/* MOBILE MENU */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="md:hidden gradient-bg text-white px-6 py-6 space-y-5 animate-fade">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setMenuOpen(false)}
              className="block text-lg"
            >
              {link.name}
            </Link>
          ))}

          <Link href="/login">
            <button href="/login" className="w-full bg-white text-purple-600 py-2 rounded-full mt-4">
              Login
            </button>
          </Link>
        </div>
      )}

      {/* STYLES */}
      <style jsx>{`
        .gradient-bg {
          background: linear-gradient(270deg, #7c3aed, #3b82f6, #6366f1);
          background-size: 600% 600%;
          animation: gradientMove 8s ease infinite;
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-fade {
          animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;