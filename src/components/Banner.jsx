import Link from "next/link";
import Image from "next/image";
import { poppins } from "@/app/layout";

export default function Banner() {
  return (
    <section 
      className="relative w-full h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <Image
        src="/assets/Banner.png"  // your image here
        alt="Banner Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Banner Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className= {`${poppins.className} w-240 text-6xl font-bold mb-6`} >
          Welcome to Our Service Platform
        </h1>
        <p className={`${poppins.className} text-lg mb-8 max-w-2xl mx-auto`}>
          High-quality services, expert technicians, and seamless customer experience.
        </p>

        {/* Learn More Button */}
        <Link href="/about">
          <button className="btn btn-primary text-white px-8 py-3 text-lg">
            Learn More
          </button>
        </Link>
      </div>
    </section>
  );
}
