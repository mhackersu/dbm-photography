import "../app/styles/globals.css";
// import Header from '@/app/header';
import HeaderNav from "@/pages/header-nav";
import GalleryMenu from "@/app/gallery-menu";
import Footer from '@/app/footer';

export default function Portraits() {
  
    return (
      <div>
        {/* <Header /> */}
        {/* <br></br> */}
        <HeaderNav />
        <GalleryMenu />
        {/* Centered Page Title & Subtitle */}
        <div className="py-24 text-center bg-white">
          <h1 className="text-4xl text-green-800 font-display uppercase tracking-widest">Portraits</h1>
          <div className="w-full max-w-xs h-px bg-gray-300 my-6 mx-auto"></div>
          <h2 className="uppercase max-w-sm mx-auto font-heading font-light tracking-widest text-gray-500">
          </h2>
        </div>
        <Footer />
      </div>
    );
}
