import "../app/styles/globals.css";
import Header from '@/app/header';
import BookingRequest from '@/pages/booking-request';
import Footer from '@/app/footer';
import Link from "next/link";

export default function Booking() {
  
    return (
      <div>
        <br></br>
        <Header />
        {/* Centered Page Title & Subtitle */}
        <div className="py-24 text-center bg-white">
          <h1 className="text-4xl text-green-800 font-display uppercase tracking-widest">Booking</h1>
          <div className="w-full max-w-xs h-px bg-gray-300 my-6 mx-auto"></div>
          <h2 className="uppercase max-w-sm mx-auto font-heading font-light tracking-widest text-gray-500">
            <Link href="/what-to-wear">What to Wear</Link>
          </h2>
          <BookingRequest />
        </div>
        <br></br>
        <Footer />
      </div>
    );
}
