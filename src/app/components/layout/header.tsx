"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "../ui/button";
import Login from "../../login/page";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "Tentang Kami", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Galeri", href: "#projects" },
  { name: "Kontak", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false); // State untuk modal login

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = () => {
    setIsLoginModalOpen(true); // Buka modal login
  };

  return (
    <>
      <div className="bg-primary text-white py-2 hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm">+62 123 456 7890</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span className="text-sm">info@ciptamandiriperkasa.id</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="text-sm hover:underline">
              {/* Career */}
            </Link>
            <Link href="#" className="text-sm hover:underline">
              {/* News */}
            </Link>
          </div>
        </div>
      </div>

      <motion.header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
        <div className="container flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src="/logo.webp?height=40&width=200" alt="Cipta Mandiri Perkasa" width={200} height={40} className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-foreground hover:text-primary font-medium transition-colors">
                {item.name}
              </Link>
            ))}
            <Button onClick={handleLogin}>Login</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="md:hidden bg-white">
              <div className="container py-4 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href} className="text-foreground hover:text-primary font-medium py-2 transition-colors" onClick={() => setIsOpen(false)}>
                    {item.name}
                  </Link>
                ))}
                <Button onClick={handleLogin} className="w-full">
                  Login
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Login Modal */}
      <Login isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
}
