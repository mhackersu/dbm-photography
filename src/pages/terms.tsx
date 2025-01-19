import Footer from '@/app/footer';
import "../app/styles/globals.css";
import Header from '@/app/header';

export default function Terms() {
  
    return (
      <div>
        <Header />
        {/* Centered Page Title & Subtitle */}
        <div className="py-24 text-center">
          <h1 className="text-4xl text-green-800 font-display uppercase tracking-widest">T&C</h1>
          <div className="w-full max-w-xs h-px bg-gray-300 my-6 mx-auto"></div>
          <h2 className="uppercase max-w-sm mx-auto font-heading font-light tracking-widest text-gray-500">
          All photographic gallery content on this site has either been produced or directly by, and/or, indirectly, under the direct production and/or supervision of the principal photographer, and full copyright herein is expressly granted, pursuant to Copyright Act -Title 17 of the United States Code. Section 102(5)
          </h2>
        </div>
        <Footer />
      </div>
    );
}
