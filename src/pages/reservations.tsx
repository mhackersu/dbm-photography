import "../app/styles/globals.css";
import Footer from '@/app/footer';
import Header from '@/app/header';

export default function Reservations() {
  
    return (
      <div>
        <Header />
        {/* Centered Page Title & Subtitle */}
        <div className="py-24 text-center">
          <h1 className="text-4xl text-green-800 font-display uppercase tracking-widest">Reservations</h1>
          <div className="w-full max-w-xs h-px bg-gray-300 my-6 mx-auto"></div>
          <h2 className="uppercase max-w-sm mx-auto font-heading font-light tracking-widest text-gray-500">
          </h2>
        </div>
        <Footer />
      </div>
    );
}
