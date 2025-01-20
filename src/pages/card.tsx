import "../app/styles/globals.css";

export default function Card() {

  return (
    <div>
        {/* Centered Page Title & Subtitle */}
        <div className="py-24 text-center bg-white">
            <img className="h-[125px] mx-auto block" src="https://res.cloudinary.com/desertsofcacti/image/upload/v1737243412/Double%20Bar%20M%20Photography/glyph_baqhqx.png" />
            <h1 className="text-4xl text-green-800 font-display uppercase tracking-widest">Double Bar M Photography</h1>
            <div className="w-full max-w-xs h-px bg-gray-300 my-6 mx-auto"></div>
            <h2 className="uppercase max-w-sm mx-auto font-heading font-light tracking-widest text-gray-500">Timeless photojournalism and photographic expertise</h2>
        </div>
    </div>
  );
}
