import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo dan Deskripsi */}
          <div>
            <Image
              src="/logo.webp"
              alt="Cipta Mandiri Perkasa - Professional Construction Services"
              width={200}
              height={40}
              className="h-10 max-w-[200px] object-contain mb-6"
            />
            <p className="text-gray-300 mb-6">
              Professional construction and building services with over 20 years of experience in the industry.
            </p>
            <div className="flex space-x-4 mb-8">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" title="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" title="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" title="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" title="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(/ /g, "")}`} className="text-gray-300 hover:text-white hover:underline transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {["Building Construction", "House Renovation", "Architecture Design", "Interior Design", "Consultation"].map((service) => (
                <li key={service}>
                  <Link href="#" className="text-gray-300 hover:text-white hover:underline transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0" aria-label="Location Icon" />
                <span className="text-gray-300">Jl. Raya Cipta Mandiri No. 123, Jakarta, Indonesia</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" aria-label="Phone Icon" />
                <span className="text-gray-300">+62 123 456 7890</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" aria-label="Email Icon" />
                <span className="text-gray-300">info@ciptamandiriperkasa.id</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800 py-8">
        <div className="container text-center text-gray-400">
          <p>© {new Date().getFullYear()} Cipta Mandiri Perkasa. All rights reserved.</p>
          <div className="mt-2">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors hover:underline">
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
