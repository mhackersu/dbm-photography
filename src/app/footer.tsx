// import Link from 'next/link'
import "../app/globals.css";

export default function Footer() {
  
    return (
      <div>
        <div className="bg-green-800 text-white text-opacity-40 font-semibold uppercase text-xs tracking-widest bg-opacity-80 px-12">
        <div className="container mx-auto grid grid-cols-4 py-24">
            <div>
                <div className="text-white opacity-50 text-4xl font-display">HOWDY PARTNERS</div>
                <br></br>
                <div>New Client Onboarding</div>
            </div>
            <div>
                <div className="font-display text-white uppercase text-sm tracking-widest mb-6">Services</div>
                <a href="#" className="block mb-4">Weddings & Portraits</a>
                <a href="#" className="block mb-4">Commercial</a>
                <a href="#" className="block mb-4">Reproduction</a>
                <a href="#" className="block mb-4">Restoration</a>
                <a href="#" className="block mb-4">Framing</a>
            </div>
            <div>
                <div className="font-display text-white uppercase text-sm tracking-widest mb-6">Laboratories</div>
                <a href="#" className="block mb-4">White House</a>
                <a href="#" className="block mb-4">ProDPI</a>
                <a href="#" className="block mb-4">H&H</a>
                <a href="#" className="block mb-4">Custom</a>
            </div>
            <div>
                <div className="font-display text-white uppercase text-sm tracking-widest mb-6">Products</div>
                <a href="#" className="block mb-4">4K</a>
                <a href="#" className="block mb-4">6K</a>
                <a href="#" className="block mb-4">C41</a>
                <a href="#" className="block mb-4">C120</a>
            </div>
        </div>
        <div className="text-sm lg:text-base text-center font-heading font-light tracking-widest uppercase text-white opacity-75 pb-24">©2025 Design By DBMCO.NET</div>
        </div>
      </div>
    );
}


