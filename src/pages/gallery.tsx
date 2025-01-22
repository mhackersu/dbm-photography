import "../app/styles/globals.css";
import Header from '@/app/header';
import GalleryMenu from "@/app/gallery-menu";
import Footer from '@/app/footer';

export default function Gallery() {
  
    return (
      <div>
        <Header />
        <br></br>
        <GalleryMenu />
        {/* Centered Page Title & Subtitle */}
        <div className="py-24 text-center bg-white">
          <h1 className="text-4xl text-green-800 font-display uppercase tracking-widest">Gallery</h1>
          <div className="w-full max-w-xs h-px bg-gray-300 my-6 mx-auto"></div>
          <h2 className="uppercase max-w-sm mx-auto font-heading font-light tracking-widest text-gray-500">
            Welcome to our online gallery and store. We offer wedding and portrait photography along with exceptional print and frame products. Each photo session includes an online photography gallery which now features a complete line of greeting and seasonal cards. Ordering online is quick and easy and now includes contactless delivery, including albums and frames! We only use the very best in photographic prints and techniques; equipment and supplies that have proven the test of time.
          </h2>
        </div>
        <Footer />
      </div>
    );
}
