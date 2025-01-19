import Footer from '@/app/footer';
import Header from '@/app/header';

export default function Home() {

  return (
    <div className="font-sans antialiased bg-gray-50">
      {/* Header Announcement */}
      <div className="bg-yellow-600 bg-opacity-50 text-white text-xs text-center uppercase tracking-widest py-2">
        CHECK AVAILABILITY HERE: 
        <a href="#" className="underline">ONLINE RESERVATIONS</a>
      </div>

      <Header />

      {/* Centered Page Title & Subtitle */}
      <div className="py-24 text-center">
        <img className="h-[125px] mx-auto block" src="https://res.cloudinary.com/desertsofcacti/image/upload/v1737243412/Double%20Bar%20M%20Photography/glyph_baqhqx.png" />
        <h1 className="text-4xl text-green-800 font-display uppercase tracking-widest">Double Bar M Photography</h1>
        <div className="w-full max-w-xs h-px bg-gray-300 my-6 mx-auto"></div>
        <h2 className="uppercase max-w-sm mx-auto font-heading font-light tracking-widest text-gray-500">Timeless photojournalism and photographic expertise</h2>
      </div>

      {/* <div x-data="slideshow()" x-init="init()" className="relative flex justify-center">
        <div className="w-full h-1/2 bg-gray-100 absolute inset-0"></div>
        <img x-bind:src="images[current]" className="w-full h-96 object-cover relative max-w-6xl" />
      </div> */}

      <div className="relative flex justify-center">
        <div className="w-full h-1/2 bg-gray-100 absolute inset-0">
        </div>
        <img />
      </div>

      <div className="flex">
        <img src="https://res.cloudinary.com/desertsofcacti/image/upload/v1737235637/Double%20Bar%20M%20Photography/MarniGrantEP15_0248_uvuryb.jpg" className="w-7/12 h-96 object-cover" />
        <div className="w-5/12 relative flex flex-col justify-end">
          <div className="bg-gray-100 px-12 pt-24">
            <p className="text-sm leading-loose text-gray-400 font-light">
            Every pose, every photo, every print, every detail, expertly hand-placed. We deliver a complete photographic experience, tailored to your preferences and specific needs.
            </p>
            <a href="#" className="mt-4 block bg-white w-full uppercase font-display text-gray-700 text-center text-sm tracking-widest p-3">
              View Engagements Gallery
            </a>
          </div>
        </div>
      </div>
      <br></br>
      <div className="flex">
        <div className="w-11/12 relative flex flex-col justify-end">
          <div className="bg-gray-100 px-12 pt-24">
            <a href="#" className="mt-4 block bg-white w-full uppercase font-display text-gray-700 text-center text-sm tracking-widest p-3">
              View Bridal Gallery
            </a>
            <p className="text-sm leading-loose text-gray-400 font-light">
            One of the more practical reasons for bridal portraits is that the session provides you with a trial run for your hair, makeup, and your dress. This trial run can help work out a lot of details before the wedding day.
            </p>
          </div>
        </div>
        <img src="https://res.cloudinary.com/desertsofcacti/image/upload/v1737236557/Double%20Bar%20M%20Photography/EmilyWilsonBP11_0122_FAV-3_jl4uko.jpg" className="w-7/12 h-96 object-cover" />
      </div>
      <br></br>
      <div className="flex">
        <img src="https://res.cloudinary.com/desertsofcacti/image/upload/v1737236368/Double%20Bar%20M%20Photography/KristiDanielWED11_combo_01_vaohzg.jpg" className="w-7/12 h-96 object-cover" />
        <div className="w-5/12 relative flex flex-col justify-end">
          <div className="bg-gray-100 px-12 pt-24">
            <p className="text-sm leading-loose text-gray-400 font-light">
            We express your story using a variety of photography styles; From traditional, to modern, to classical-style, and photojournalism-style, combined with our obsessive customer-focused approach, we are committed to your satisfaction and our promise to deliver a complete photographic experience, tailored to your preferences and specific needs.
            </p>
            <a href="#" className="mt-4 block bg-white w-full uppercase font-display text-gray-700 text-center text-sm tracking-widest p-3">
              View Weddings Gallery
            </a>
          </div>
        </div>
      </div>
      <br></br>
      <Footer />

    </div>
  );
}
