import Link from 'next/link'
import "../app/globals.css";

export default function Header() {
  
    return (
      <div>
        {/* Header Menu */}
        <div className="bg-gray-100 py-12 flex items-center justify-center uppercase tracking-widest text-xs text-gray-500">
            <Link href="/" className="mx-4">Home</Link>
            <Link href="/gallery" className="mx-4">Gallery</Link>
            <Link href="/about" className="mx-4">About</Link>
            <a href="#" className="mx-4">Pricing</a>
            <Link href="/gallery" className="mx-4">Booking</Link>
            <a href="#" className="mx-4">Reservations</a>
        </div>
      </div>
    );
}


