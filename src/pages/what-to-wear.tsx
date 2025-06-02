import "../app/styles/globals.css";
import Footer from '@/app/footer';
import Header from '@/app/header';

export default function WhatToWear() {
  
    return (
      <div>
        <br></br>
        <Header />
        {/* Centered Page Title & Subtitle */}
        <div className="py-24 text-center bg-white">
          <h1 className="text-4xl text-green-800 font-display uppercase tracking-widest">What To Wear</h1>
          <div className="w-full max-w-xs h-px bg-gray-300 my-6 mx-auto"></div>
          <h2 className="uppercase max-w-sm mx-auto font-heading font-light tracking-widest text-gray-500">

**Focus on coordinating colors**

Choose items in your outfit that fit within a color scheme. Pro tip: Combine Textures.


**Envision your home decor**

Since you will be living with these images in your home you might want to think about the style of the particular room or shelf that you envision you images.


**Add accessories**

Accessories add dimension to your outfit and they can be fun to use as props in photos. Pro tip: Integrate colors and textures.


Avoid patterns, unless you intentionally want patterns

Imagine what the image would look like if everyone in the photo was wearing all different patterns. In short, don’t do this.

Pro tip: Combining patterns in the portrait should be avoided as this may distract from the final image.


Look for clothing collections

When shopping for clothes, look for stores that offer color coordinated collections.

Pro tip: This is especially helpful if working with multiple outfits for children.


Plan ahead

Start planning outfits immediately. Have a particular outfit in mind? Make sure it fits. Pro tip: Verify if the clothes should be professionally cleaned and allow plenty of time for turnaround.


Leave the characters at home

Your child may love their latest Disney character on their tee shirt but you’ll want to leave this type of apparel at home. Just like patterns, characters on shirts can distract from the final image.


Textures

Textures like scarves or belts add dimension. Embrace textures.


Think timeless

These photos will be hanging on your walls and treasured for years to come. Choosing simple, classic apparel, you will reveal a timeless aspect in the image.
          </h2>
          <br></br>
          <a href="/booking" className="text-2xl text-green-800 font-display uppercase tracking-widest">Return To Booking</a>
        </div>
        <Footer />
      </div>
    );
}
