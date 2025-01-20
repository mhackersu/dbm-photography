import "../app/styles/globals.css";
import Footer from '@/app/footer';
import Header from '@/app/header';

export default function About() {
  
    return (
      <div>
        <Header />
        {/* Centered Page Title & Subtitle */}
        <div className="py-24 text-center bg-white">
          <h1 className="text-4xl text-green-800 font-display uppercase tracking-widest">About Us</h1>
          <div className="w-full max-w-xs h-px bg-gray-300 my-6 mx-auto"></div>
          <h2 className="uppercase max-w-sm mx-auto font-heading font-light tracking-widest text-gray-500">
          We value charity, courage, respect, and the heritage of our community. These principles inspire our work and shape our artistic approach.  
            Photography is our way of celebrating life and the human experience. Through our gallery, we showcase our dedication to craftsmanship and storytelling.  
            As wedding photographers, we are passionate about capturing the beauty and uniqueness of each couple&aposs journey. Every wedding tells a one-of-a-kind story, and it is our honor to document these moments with care and precision. Your wedding day is a celebration, and we strive to preserve its magic through timeless, high-quality imagery.
          </h2>
        </div>
        <Footer />
      </div>
    );
}
