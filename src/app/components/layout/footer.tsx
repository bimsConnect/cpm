import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo dan Deskripsi */}
          <div>
            <Image
              src="/logo.webp?height=40&width=200"
              alt="Cipta Mandiri Perkasa - Professional Construction Services"
              width={200}
              height={40}
              className="h-10 w-auto mb-6" // Tambahkan margin bawah
            />
            <p className="text-gray-300 mb-6"> {/* Tambahkan margin bawah */}
              Professional construction and building services with over 20 years of experience in the industry.
            </p>
            <div className="flex space-x-4 mb-8"> {/* Tambahkan margin bawah */}
              <Link href="https://facebook.com" className="text-gray-300 hover:text-white transition-colors" title="Facebook">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" className="text-gray-300 hover:text-white transition-colors" title="Twitter">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://instagram.com" className="text-gray-300 hover:text-white transition-colors" title="Instagram">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://linkedin.com" className="text-gray-300 hover:text-white transition-colors" title="LinkedIn">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3> {/* Tambahkan margin bawah */}
            <ul className="space-y-3"> {/* Atur spacing vertikal */}
              <li>
                <Link href="#home" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3> {/* Tambahkan margin bawah */}
            <ul className="space-y-3"> {/* Atur spacing vertikal */}
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Building Construction
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  House Renovation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Architecture Design
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Interior Design
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3> {/* Tambahkan margin bawah */}
            <ul className="space-y-4"> {/* Atur spacing vertikal */}
              <li className="flex">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-gray-300">Jl. Raya Cipta Mandiri No. 123, Jakarta, Indonesia</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-gray-300">+62 123 456 7890</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-gray-300">info@ciptamandiriperkasa.id</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800 py-8"> {/* Tambahkan padding atas dan bawah */}
        <div className="container text-center text-gray-400">
          <p>© {new Date().getFullYear()} Cipta Mandiri Perkasa. All rights reserved.</p>
          <div className="mt-2">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}