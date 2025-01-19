import "../app/styles/globals.css";
import Footer from '@/app/footer';
import Header from '@/app/header';

export default function Gallery() {
  
    return (
      <div>
        <Header />
        {/* Centered Page Title & Subtitle */}
        <div className="py-24 text-center">
          <h1 className="text-4xl text-green-800 font-display uppercase tracking-widest">Gallery</h1>
          <div className="w-full max-w-xs h-px bg-gray-300 my-6 mx-auto"></div>
          <h2 className="uppercase max-w-sm mx-auto font-heading font-light tracking-widest text-gray-500">
            Welcome to our online gallery and store. We offer wedding and portrait photography along with exceptional print and frame products. Each photo session includes an online photography gallery which now features a complete line of greeting and seasonal cards. Ordering online is quick and easy and now includes contactless delivery, including albums and frames! We only use the very best in photographic prints and techniques; equipment and supplies that have proven the test of time.
          </h2>
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
        <Footer />
      </div>
    );
}
