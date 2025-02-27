"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import Login from "../../login/page";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "Tentang Kami", href: "#about" },
  { name: "Mengapa kami?", href: "#services" },
  { name: "Galeri", href: "#projects" },
  { name: "Blog" , href: "#blog" },
  { name: "Kontak", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = () => {
    setIsLoginModalOpen(true);
  };

  return (
    <>
      {/* Top Header */}
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

      {/* Navbar */}
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-white shadow-md"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.webp?height=40&width=200"
              alt="Cipta Mandiri Perkasa"
              width={200}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button onClick={handleLogin}>Login</Button>
          </nav>

          {/* Mobile Menu Button */}
          <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <SheetTrigger onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary font-medium py-2 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button onClick={handleLogin} className="w-full">
                  Login
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.header>

      {/* Login Modal */}
      <Login isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
}
