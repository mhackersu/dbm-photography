import "../app/styles/globals.css";
import Header from "@/app/header";
import GalleryMenu from "@/app/gallery-menu";
import Footer from "@/app/footer";

export default function Weddings() {
  
    return (
      <div>
        <Header />
        <br></br>
        <GalleryMenu />
          {/* Centered Page Title & Subtitle */}
          <div className="py-24 text-center bg-white">
          <h1 className="text-4xl text-green-800 font-display uppercase tracking-widest">Wedding Photography</h1>
          <div className="w-full max-w-xs h-px bg-gray-300 my-6 mx-auto"></div>
          <h2 className="uppercase max-w-sm mx-auto font-heading font-light tracking-widest text-gray-500">
          We offer a complete range of wedding ceremony & reception photography coverage for your wedding. Additionally, we offer engagement photography and bridal portraits.
          </h2>
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
        <div className="px-12 flex flex-wrap gap-4">
          <img className="w-auto h-72 flex-shrink object-cover" src="https://res.cloudinary.com/desertsofcacti/image/upload/v1737242160/Double%20Bar%20M%20Photography/EmilyWilsonBP11_0072_FAV_tjb7pj.jpg" />
          <img className="w-auto h-72 flex-shrink object-cover" src="https://res.cloudinary.com/desertsofcacti/image/upload/v1737242160/Double%20Bar%20M%20Photography/MarniGrantEP15_0589_urhkdl.jpg" />
          <img className="w-auto h-72 flex-shrink object-cover" src="https://res.cloudinary.com/desertsofcacti/image/upload/v1737242159/Double%20Bar%20M%20Photography/EmilyWilsonBP11_0222_FAV_auat7i.jpg" />
          <img className="w-auto h-72 flex-shrink object-cover" src="https://res.cloudinary.com/desertsofcacti/image/upload/v1737242097/Double%20Bar%20M%20Photography/609905_EmilyJohnWED12_0090_y2mnks.jpg" />
          <img className="w-auto h-72 flex-shrink object-cover" src="https://res.cloudinary.com/desertsofcacti/image/upload/v1737242158/Double%20Bar%20M%20Photography/609905_EmilyJohnWED12_0738_mlsq17.jpg" />
          <img className="w-auto h-72 flex-shrink object-cover" src="https://res.cloudinary.com/desertsofcacti/image/upload/v1737242158/Double%20Bar%20M%20Photography/609911_MeganRonnieWED12_0444_chq0mv.jpg" />
          <img className="w-auto h-72 flex-shrink object-cover" src="https://res.cloudinary.com/desertsofcacti/image/upload/v1737242157/Double%20Bar%20M%20Photography/633059_StephanieKevinWED12_0502_ioomoz.jpg" />
          <img className="w-auto h-72 flex-shrink object-cover" src="https://res.cloudinary.com/desertsofcacti/image/upload/v1737242100/Double%20Bar%20M%20Photography/NicoleKyriakosWED11_529_bym6or.jpg" />
        </div>
        <br></br>
        <Footer />
      </div>
    );
}
