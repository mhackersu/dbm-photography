import Link from 'next/link'
import "../app/globals.css";
import Footer from '@/app/footer';
import Header from '@/app/header';

export default function Gallery() {
  
    return (
      <div>
        <Header />

        <h1 className="px-12 py-24 text-center font-serif text-4xl text-slate-600">Wedding Gallery</h1>
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
      </div>
    );
}
