import { Button } from "@/components/ui/button"; 
import { Card, CardContent } from "@/components/ui/card";
import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaArrowRight,
  FaShoppingBag, // Added icon for shop
  FaQuoteLeft, // Added icon for testimonial
} from "react-icons/fa";
import Logo from "@/public/image.png"; // Make sure this path is correct
import Image from "next/image";
import Link from "next/link";
import Ankara1 from "@/public/ankara1.png";
import Ankara2 from "@/public/ankara2.png";
export default function JoyApparelLinktree() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#D2B48C] to-white flex flex-col items-center p-6 font-sans text-gray-800">
      {/* Hero Section */}
      <div className="text-center mt-10 mb-8 w-full max-w-lg mx-auto">
        <Image
          src={Logo} // Ensure this path is correct
          alt="Joy Apparel Logo"
          width={120} // Set explicit width
          height={120} // Set explicit height
          className="w-28 h-28 rounded-full mx-auto border-4 border-amber-700 shadow-lg object-cover mb-4 transition-transform hover:scale-105 duration-300"
          priority // Add priority for LCP element
        />
        <h1 className="text-4xl font-bold text-amber-900 tracking-tight mb-2">
          JoyApparel
        </h1>
        <p className="text-amber-700 text-base italic mb-4">
          Elegant pieces made with love & creativity
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 text-3xl text-amber-700">
          <a
            href="https://www.instagram.com/joy_apparel1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-amber-900 transition-colors duration-200 hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="https://tiktok.com/@joy_apparel" // Replace with actual TikTok username
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Tiktok"
            className="hover:text-amber-900 transition-colors duration-200 hover:scale-110"
          >
            <FaTiktok />
          </a>
          <a
            href="https://api.whatsapp.com/message/KISWF3RQC5QYP1?autoload=1&app_absent=0" // Use the correct WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-amber-900 transition-colors duration-200 hover:scale-110"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Linktree Buttons */}
      <div className="w-full max-w-md mt- space-y-4">
        {/* Primary Button */}
        <Button
          asChild // Use asChild to allow Link inside Button
          className="w-full bg-amber-800 hover:bg-amber-900 text-white text-lg py-3 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-[1.02]"
        >
          <Link href="https://wa.me/c/2348079975733">
            {" "}
            {/* Replace with your actual shop link */}
            <FaShoppingBag className="mr-3" /> Shop Our Collections{" "}
            <FaArrowRight className="ml-auto opacity-70" />
          </Link>
        </Button>

        {/* Secondary Buttons */}
        {[
          { label: "Bulks Production", href: "https://api.whatsapp.com/message/KISWF3RQC5QYP1?autoload=1&app_absent=0" },
          { label: "Custom Orders", href: "https://api.whatsapp.com/message/KISWF3RQC5QYP1?autoload=1&app_absent=0" },
          { label: "Fashion Training", href: "https://api.whatsapp.com/message/KISWF3RQC5QYP1?autoload=1&app_absent=0" },
          {
            label: "Book a Consultation",
            href: "https://wa.me/c/2348079975733",
            external: true,
          },
        ].map((item) => (
          <Button
            key={item.label}
            asChild
            variant="outline" // Use outline variant for secondary buttons
            className="w-full border-amber-600 hover:bg-amber-50 text-amber-800 text-lg py-3 rounded-lg shadow-sm transition-all duration-300 ease-in-out hover:border-amber-800 hover:text-amber-900 transform hover:scale-[1.02]"
          >
            {item.external ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            ) : (
              <Link href={item.href}>{item.label}</Link>
            )}
          </Button>
        ))}
      </div>

      {/* --- NEW FEATURE: Product Spotlight --- */}
      <div className="w-full max-w-lg mt-12">
        <h2 className="text-2xl font-semibold text-amber-800 text-center mb-6 tracking-tight">
          Featured Designs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Product Card 1 */}
          <Card className="overflow-hidden rounded-lg shadow-md border-amber-100 hover:shadow-lg transition-shadow duration-300 bg-amber-50">
            <CardContent className="p-0 -mt-6">
              <Image
                src={Ankara1}
                alt="Featured Dress"
                width={600}
                height={400}
                className="w-full  object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-amber-900 mb-1">
                  The 'Adire' Silk Gown
                </h3>
                <p className="text-sm text-neutral-600 mb-3">
                  A stunning blend of tradition and modern elegance. Perfect for
                  any occasion.
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-amber-700 text-amber-800 hover:bg-amber-50 w-full"
                  asChild
                >
                  <Link href="https://api.whatsapp.com/message/KISWF3RQC5QYP1?autoload=1&app_absent=0">View Details</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          {/* Product Card 2 */}
          <Card className="overflow-hidden rounded-lg shadow-md border-amber-100 hover:shadow-lg transition-shadow duration-300 bg-amber-50">
            <CardContent className="p-0 -mt-6">
              <Image
                src={Ankara2}
                alt="Featured Top"
                width={600}
                height={400}
                className="w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-amber-900 mb-1">
                  Chic Ankara Print Top
                </h3>
                <p className="text-sm text-neutral-600 mb-3">
                  Vibrant and versatile, pair it with jeans or a skirt for a
                  standout look.
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-amber-700 text-amber-800 hover:bg-amber-50 w-full"
                  asChild
                >
                  <Link href="https://wa.me/p/23926239800312765/2348079975733">View Details</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* --- NEW FEATURE: Testimonial Snippet --- */}
      <div className="w-full max-w-md mt-12 text-center px-4">
        <FaQuoteLeft className="text-3xl text-amber-300 mx-auto mb-2" />
        <p className="text-neutral-700 italic leading-relaxed">
          "Absolutely in love with my custom dress from JoyApparel! The quality
          and fit are perfect. Highly recommend!"
        </p>
        <p className="mt-2 font-medium text-sm text-amber-800">
          - Happy Customer
        </p>
      </div>

      {/* About Section */}
      <div className="max-w-md mt-12 text-center text-neutral-600 text-base leading-relaxed">
        <h3 className="text-xl font-semibold text-amber-800 mb-3">About Us</h3>
        <p>
          Founded by Joy, a passionate fashion designer based in Lagos, Nigeria.
          She crafts timeless, modern fits inspired by culture, class, and
          creativity.
        </p>
        <p className="mt-3 font-medium">
          📍 Lagos | 🌍 Worldwide Shipping Available
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-sm text-neutral-500 text-center pb-10">
        <p>
          Contact:{" "}
          <a
            href="mailto:joyapparel550@gmail.com"
            className="hover:text-amber-700 transition-colors"
          >
            joyapparel550@gmail.com,
          </a>
          <span>📞-07047688368</span>
        </p>
        <p className="mt-1">Made with 💛 by Devben</p>
        {/* Optional: Keep or remove the 'Powered by' line */}
        {/* <p className="mt-1">Powered by DevBen ✨</p> */}
        <p className="mt-2">
          Copyright © {new Date().getFullYear()} JoyApparel. All Rights
          Reserved.
        </p>
      </footer>
    </div>
  );
}
